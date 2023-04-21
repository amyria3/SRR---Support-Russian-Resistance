import lunr from "lunr";

function fuzzySearch(data, term) {
  // Create a lunr index for the top-level fields
  const idx = lunr(function () {
    this.ref("id");
    this.field("name")
    this.field("description");

    data.forEach(function (doc) {
      this.add(doc);
    }, this);
  });

  // Create a separate lunr index for the allResources array
  const resourceIdx = lunr(function () {
    this.ref("id");
    this.field("description");

    data.forEach(function (entry) {
      entry.allResources.forEach(function (resource) {
        this.add(resource);
      }, this);
    }, this);
  });

  // Create a separate lunr index for the allLinkedKeywords array
  const keywordIdx = lunr(function () {
    this.ref("id");
    this.field("protoKeyword");

    data.forEach(function (entry) {
      entry.allLinkedKeywords.forEach(function (keyword) {
        this.add(keyword);
      }, this);
    }, this);
  });

  // Combine the search results from all indexes
  function search(query) {
    const results = [];

    // Search top-level fields
    const idxResults = idx.query(function (q) {
      q.term(lunr.tokenizer(query), {
        boost: 10,
        editDistance: 2,
      });
    });
    idxResults.forEach((result) => {
      results.push(data.find((doc) => doc.id === result.ref));
    });

    // Search resources
    const resourceResults = resourceIdx.query(function (q) {
      q.term(lunr.tokenizer(query), {
        boost: 5,
        editDistance: 2,
      });
    });
    resourceResults.forEach((result) => {
      data.forEach((doc) => {
        doc.allResources.forEach((resource) => {
          if (resource.id === result.ref) {
            results.push(doc);
          }
        });
      });
    });

    // Search keywords
    const keywordResults = keywordIdx.query(function (q) {
      q.term(lunr.tokenizer(query), {
        boost: 5,
        editDistance: 2,
      });
    });
    keywordResults.forEach((result) => {
      data.forEach((doc) => {
        doc.allLinkedKeywords.forEach((keyword) => {
          if (keyword.id === result.ref) {
            results.push(doc);
          }
        });
      });
    });

    // Remove duplicate results
    const uniqueResults = Array.from(new Set(results));

    return uniqueResults;
  }

  return search(term);
}

// Example usage:
//console.log(JSON.stringify(currentSearch(rawData, "novay")));

export default fuzzySearch