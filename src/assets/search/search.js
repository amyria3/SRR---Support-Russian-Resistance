import lunr from "lunr";

function search(data, indexa, term) {
  console.log("searchScript runs");
  const { idx } = indexa;

  function lunrFind(term) {
    if (term && 1 > term.length < 4) {
      return idx.search(`${term}*`);
    }
    if (term && 10 > term.length > 3) {
      return idx.search(`${term}^10 ${term}*^5 *${term}~1`);
    }
    if (term && term.length > 9) {
      return idx.search(
        `${term}^20 ${term}*^15 ${term}~1^15 ${term}~2^5 *${term}~1 *${term}`
      );
    }
  }

  function findMatchingCards(results) {
    let uniqueResults = [];
    for (const result of results) {
      //find matching object in data and push them to unique Results
      uniqueResults.push(data.find((dataSet) => result.ref === dataSet.id));

      // const uniqueResults = Array.from(new Set(results));
    }
    return uniqueResults;
  }

  return findMatchingCards(lunrFind(term));
}
export default search;