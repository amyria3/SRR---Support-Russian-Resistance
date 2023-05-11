import lunr from "lunr";

function search(data, indexa, term) {
  console.log("searchScript runs");

  const results = [];
  const { idx } = indexa

  //PREFIX MATCHES
  if (term.length > 1 && term.length < 5) {
    const query = (term + "*").toString;

    // Search top-level fields
    const idxResults = idx.search(query);
    console.log("########IMPORTANT########" + JSON.stringify(idxResults))
    idxResults.forEach((idxResult) => {
      results.push(data.find((element) => element.id === idxResult.ref));
    });
  }

  if (term.length > 4) {
    // Search top-level fields
    const idxResults = idx.search(function (q) {
      q.term(lunr.tokenizer(term), {
        boost: 10,
        editDistance: 3,
        prefix: term.length,
      });
    });
    idxResults.forEach((result) => {
      results.push(data.find((doc) => doc.id === result.ref));
    });
    // Remove duplicate results
  }
  const uniqueResults = Array.from(new Set(results));
  console.log(uniqueResults);
  return uniqueResults;
}

export default search;
