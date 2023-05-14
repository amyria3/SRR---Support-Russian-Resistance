import lunr from "lunr";

function search(data, indexa, term) {
  const { idx } = indexa;

  function findMatchingCards(results) {
    let uniqueResults = [];
    if (results.length && results.length > 0) {
      for (const result of results) {
        //find matching object in data and push them to unique Results
        uniqueResults.push(data.find((dataSet) => result.ref === dataSet.id));

        // const uniqueResults = Array.from(new Set(results));
      }
    }
    return uniqueResults;
  }
  function lunrFind(term) {
    let results = [];
    console.log("findTerm runs");

    if (term && 1 > term.length < 4) {
      results = idx.search(`${term}*`);
    }
    if (term && 10 > term.length > 3) {
      results = idx.search(`${term}^10 ${term}*^5 *${term}~1`);
    }
    if (term && term.length > 9) {
      results = idx.search(
        `${term}^20 ${term}*^15 ${term}~1^15 ${term}~2^5 *${term}~1 *${term}`
      );
    }
    return results;
  }
  function lunrStrictFind(term) {
    let results = [];

    if (term && term.length > 2) {
      results = idx.search(term);
      return results;
    }
  }
  if (term.charAt(term.length - 1) === '"' && term.charAt(0) === '"') {
    const newTerm = term.slice(1, -1);
    console.log("STRICT", term, newTerm);
    return findMatchingCards(lunrStrictFind(newTerm));
  } else {
    return findMatchingCards(lunrFind(term));
  }
}
export default search;
