import lunr from "lunr";

function search(data, indexa, term) {
  const results = [];
  const { idx, resourceIdx, keywordIdx } = indexa;

  //PREFIX MATCHES
  if (term.length > 0 && term.length <= 5) {
    const query = term + "*";

    // Search top-level fields
    const idxResults = idx.search(query);
    idxResults.forEach((result) => {
      results.push(data.find((doc) => doc.id === result.ref));
    });

    // Search resources
    const resourceResults = resourceIdx.search(query);
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
    const keywordResults = keywordIdx.search(query);
    keywordResults.forEach((result) => {
      data.forEach((doc) => {
        doc.allLinkedKeywords.forEach((keyword) => {
          if (keyword.id === result.ref) {
            results.push(doc);
          }
        });
      });
    });
  }

  if (term.length > 4) {
    // Search top-level fields
    const idxResults = idx.query(function (q) {
      q.term(lunr.tokenizer(query), {
        boost: 10,
        editDistance: 3,
        prefix: query.length,
      });
    });
    idxResults.forEach((result) => {
      results.push(data.find((doc) => doc.id === result.ref));
    });

    // Search resources
    const resourceResults = resourceIdx.query(function (q) {
      q.term(lunr.tokenizer(query), {
        boost: 3,
        editDistance: 2,
        prefix: query.length,
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
        boost: 7,
        editDistance: 2,
        prefix: query.length,
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
  }

  // Remove duplicate results
  const uniqueResults = Array.from(new Set(results));
  return uniqueResults;
}

export default search;
