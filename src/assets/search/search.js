import lunr from "lunr";

function search(data, indexa, term) {
  const results = [];

  console.log("Testing search script : ");
  console.log("Term " + term);

  //PREFIX MATCHES



  //EXACT MATCHES
  ((data, indexa, term) => {

    console.log("Inline function running.")

    const { idx, resourceIdx, keywordIdx } = indexa;

    // Search top-level fields
    const idxResults = idx.search(term);
    idxResults.forEach((result) => {
      results.push(data.find((doc) => doc.id === result.ref));
    });

    // Search resources
    const resourceResults = resourceIdx.search(term);
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
    const keywordResults = keywordIdx.search(term);
    keywordResults.forEach((result) => {
      data.forEach((doc) => {
        doc.allLinkedKeywords.forEach((keyword) => {
          if (keyword.id === result.ref) {
            results.push(doc);
          }
        });
      });
    });
  })(data, indexa, term);

  // Remove duplicate results
  const uniqueResults = Array.from(new Set(results));
  return uniqueResults;
}

export default search;
