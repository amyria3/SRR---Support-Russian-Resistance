import React, { useState, useEffect } from "react";
import "./styles.css";
import Fuse from "fuse.js";
import debounce from "lodash.debounce";
import { cards_data } from "../assets/DummyData";
import { Card } from "react-bootstrap";

export default function Search() {
  // const res = searchProcess();

  const [searchResult, setSearchResult] = useState([]);
  // let searchResult;
  let fuse;

  // TODO: set the init logic in the right way
  const buildIndex = () => {
    fuse = new Fuse(cards_data, {
      // includeMatches: true,
      includeScore: true,
      // threshold: 0.3,
      useExtendedSearch: true,
      keys: ["name", "description"],
      //"allLinkedKeywords"
    });
  };

  useEffect(() => {
    buildIndex();
  }, [buildIndex]);

  // buildIndex()

  const handleSearch = (e) => {
    const query = e.target.value;

    if (query === "") {
      setSearchResult([]);
      return;
    }

    const doSearch = debounce(
      () => {
        const res = fuse.search("'" + query); // find the item include query string

        setSearchResult(searchHighlight(res, query));
      },
      500,
      {
        leading: true,
        trailing: false,
      }
    );

    doSearch();
  };

  const renderResult = (res) => {
    const resList = res.map((cardData) => {
      // console.log(item);

      return <Card {...cardData} />;
    });

    return resList;
  };

  return (
    <div className="App">
      <div id="search">
        <input
        className="h-12 rounded-lg border w-full flex pl-8
        border-line dark:border-none dark:hover:border-solid dark:hover:border-[1px]
        hover:border-interactive-hover focus:border-interactive dark:border-dt-interactive
        bg-none hover:bg-interactive dark:bg-dt-background-input
        text-typo dark:text-dt-typo
        font-extralight
        hover:shadow-default focus:shadow-default dark:shadow-none
        placeholder:text-xl placeholder:text-line dark:placeholder:text-dt-typo
        appearance-none focus:outline-none
        "
        type="search" onChange={(e) => handleSearch(e)} placeholder="Search" />
      </div>
      <div>
        {Array.isArray(searchResult) && searchResult.length !== 0
          ? (searchResult)
          : console.log("no data found")}
      </div>
    </div>
  );
}

const searchHighlight = (res, queryStr) => {
  const filteredRes = JSON.parse(JSON.stringify(res)).map((element) => {

    console.log(element)

    const searchText = queryStr.toLowerCase().trim();

    // let ngoName = element.name
    // let ngoDescription = element.description
    // let resources = element.allResources

    // if ((ngoName.toLowerCase()).includes(searchText)) {
    //   const regExp = new RegExp(searchText, "ig");

    //   ngoName = ngoName.replace(
    //     regExp,
    //     "<mark class='highlight'>$&</mark>"
    //   );
    // }

    // resources = resources.filter((resource) => {
    //   let flag = false;
    //   let resourceDescription = resource.description
    //   let resourceName = resource.name


    //   if (resourceDescription.toLowerCase().includes(searchText)) {
    //     const matchSnippetObject = getMatchSnippet(resourceDescription, searchText);

    //     if (matchSnippetObject) {
    //       const { isToLeftEnd, isToRightEnd, snippet } = matchSnippetObject;
    //       const regExp = new RegExp(searchText, "ig");

    //       const highlightContent = snippet.replace(
    //         regExp,
    //         "<mark class='highlight'>$&</mark>"
    //       );

    //       if (isToLeftEnd && isToRightEnd) {
    //         resourceDescription = highlightContent;
    //       } else if (!isToLeftEnd && isToRightEnd) {
    //         resourceDescription = `...${highlightContent}`;
    //       } else if (isToLeftEnd && !isToRightEnd) {
    //         resourceDescription = `${highlightContent}...`;
    //       } else {
    //         resourceDescription = `...${highlightContent}...`;
    //       }
    //     }

    //     flag = true;
    //   } else {
    //     resourceDescription = "";
    //   }

    //   if (resourceName.toLowerCase().includes(searchText)) {
    //     const regExp = new RegExp(searchText, "ig");

    //     resourceName = resourceName.replace(
    //       regExp,
    //       "<mark class='highlight'>$&</mark>"
    //     );

    //     flag = true;
    //   }

    //   return flag;
    // });

    // return cards_data.item;
  });

  return filteredRes;
};

function getMatchSnippet(string, term, numOfWords = 6) {
  const index = (string.toLowerCase()).indexOf(term.toLowerCase());

  if (index >= 0) {
    const _ws = [" ", "\t", "\n"]; // Whitespace
    const _pm = [".", "?", "!"]; // Punctuation marks

    let whitespace = 0;

    let left = 0;
    let isToLeftEnd = false;

    let right = 0;
    let isToRightEnd = false;

    // right trim index
    for (right = index + term.length; whitespace < numOfWords; right++) {
      if (right >= string.length || _pm.indexOf(string[right]) >= 0) {
        isToRightEnd = true;
        break;
      }

      if (_ws.indexOf(string[right]) >= 0) {
        whitespace += 1;
      }
    }

    whitespace = 0; // reset the counter of whitespace
    // left trim index
    for (left = index; whitespace < numOfWords; left--) {
      if (left < 0 || _pm.indexOf(string[left]) >= 0) {
        isToLeftEnd = true;
        break;
      }

      if (_ws.indexOf(string[left]) >= 0) {
        whitespace += 1;
      }
    }

    let offsetLeft = 0;
    let offsetRight = 0;

    if (isToLeftEnd && isToRightEnd) {
      offsetLeft = 1;
      offsetRight = 1;
    } else if (!isToLeftEnd && isToRightEnd) {
      offsetLeft = 1;
      offsetRight = 1;
    } else if (isToLeftEnd && !isToRightEnd) {
      offsetLeft = 1;
      offsetRight = 0;
    } else {
      offsetLeft = 1;
      offsetRight = 0;
    }

    return {
      isToLeftEnd,
      isToRightEnd,
      snippet: string.slice(left + offsetLeft, right + offsetRight), // return match
    };
  }

  return; // return nothing
}