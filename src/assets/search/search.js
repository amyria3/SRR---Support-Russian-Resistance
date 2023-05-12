import lunr from "lunr";

function search(data, indexa, term) {
  const boostedResults = [];
  const { idx } = indexa;

  //diff. search Functions that look in top-level fields && keywords:
  function strictSearch(term) {
    if (term.length > 2 && term.length < 12) {
      const idxResults = idx.search(term, { boost: 20 });
      idxResults.forEach((idxResult) => {
        results.push(data.find((element) => element.id === idxResult.ref));
      });
      const keywordResults = idx.query(function (q) {
        q.term(lunr.tokenizer(term), {
          boost: 20,
          fields: ["keywords"],
        });
      });
      keywordResults
        .filter(
          (result) =>
            data.find((doc) => doc.id === result.ref).keywords.length > 0
        ) // exclude empty keywords arrays
        .forEach((result) => {
          boostedResults.push(result);
        });
    }
  }

  function prefixSearch(term) {
    if (term.trim().length > 2) {
      const prefix = (term + "*").toString();
      console.log("prefix : " + prefix);
      const idxResults = idx.search(prefix, { boost: 18 });
      idxResults.forEach((result) => {
        boostedResults.push(result);
      });
    }
  }

  function fuzzySearchShort(term) {
    if (term.length > 3) {
      const idxResults = idx.query(function (q) {
        q.term(lunr.tokenizer(term), {
          boost: 10,
          editDistance: 1,
        });
      });
      idxResults.forEach((result) => {
        boostedResults.push(result);
      });
    }
  }

  function fuzzySearchLong(term) {
    if (term.length > 6) {
      const idxResults = idx.query(function (q) {
        q.term(lunr.tokenizer(term), {
          boost: 10,
          editDistance: 2,
        });
      });
      idxResults.forEach((result) => {
        results.push(data.find((doc) => doc.id === result.ref));
      });
    }
  }

  // function remove spaces from the end of the term:
  function removeEmptyCharacters(term) {
    if (term.slice(-1) === " ") {
      const newTerm = term.slice(0, -1);
      return removeEmptyCharacters(newTerm); // call the function again with the new term
    } else {
      return term; // return the term if the last character is not an empty space
    }
  }
  // actually removing:
  const checkedTerm = removeEmptyCharacters(term);

  // if the term contains spaces, split it into words and search for each word, otherwise just perform all the predefined search Functions:
  if (term.includes(" ")) {
    const words = checkedTerm.trim().split(/\s+/);
    for (const word of words) {
      strictSearch(word);
      prefixSearch(word);
      fuzzySearchShort(word);
      fuzzySearchLong(word);
    }
  } else {
    strictSearch(checkedTerm);
    prefixSearch(checkedTerm);
    fuzzySearchShort(checkedTerm);
    fuzzySearchLong(checkedTerm);
  }

  console.log("RESULTS : " + JSON.stringify(boostedResults))

  //remove duplicate entries:

  // Loop through each search result and add it to the uniqueResults array if its score is higher than the previously stored score
  function sortBoosted() {
    // sort the boostedResults array in descending order of score
    boostedResults.sort((a, b) => b.score - a.score);

    // create a map to keep track of already added results
    const addedRefs = new Map();

    // loop through the sorted array and add results to the uniqueResults array if its score is higher than the previously stored score
    const uniqueResults = [];
    for (const result of boostedResults) {
      if (!addedRefs.has(result.ref)) {
        addedRefs.set(result.ref, true);
        uniqueResults.push(data.find((element) => element.id === result.ref));
      }
    }

    console.log("UNIQUE RESULTS : " + JSON.stringify(uniqueResults))

    return uniqueResults;
  }

  return sortBoosted()
}

export default search;
