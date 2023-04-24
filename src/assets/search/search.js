import lunr from "lunr";

function search(data, indexa, term) {
  const results = [];
  const { idx, resourceIdx, keywordIdx } = indexa;
  console.log(idx, resourceIdx, keywordIdx)

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
    const idxResults = idx.term(function (q) {
      q.term(lunr.tokenizer(term), {
        boost: 10,
        editDistance: 3,
        prefix: term.length,
      });
    });
    idxResults.forEach((result) => {
      results.push(data.find((doc) => doc.id === result.ref));
    });

    // Search resources
    const resourceResults = resourceIdx.term(function (q) {
      q.term(lunr.tokenizer(term), {
        boost: 3,
        editDistance: 2,
        prefix: term.length,
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
    const keywordResults = keywordIdx.term(function (q) {
      q.term(lunr.tokenizer(term), {
        boost: 7,
        editDistance: 2,
        prefix: term.length,
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
