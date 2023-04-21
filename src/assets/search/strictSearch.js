import lunr from "lunr";

function strictSearch(documents, query) {
  // Create a lunr index for the top-level fields
  const idx = lunr(function () {
    this.ref("id");
    this.field("name")
    this.field("description");

    documents.forEach(function (doc) {
      this.add(doc);
    }, this);
  });

  // Create a separate lunr index for the allResources array
  const resourceIdx = lunr(function () {
    this.ref("id");
    this.field("description");

    documents.forEach(function (entry) {
      entry.allResources.forEach(function (resource) {
        this.add(resource);
      }, this);
    }, this);
  });

  // Create a separate lunr index for the allLinkedKeywords array
  const keywordIdx = lunr(function () {
    this.ref("id");
    this.field("protoKeyword");

    documents.forEach(function (entry) {
      entry.allLinkedKeywords.forEach(function (keyword) {
        this.add(keyword);
      }, this);
    }, this);
  });

  // Combine the search results from all indexes
  const results = [];

  // Search top-level fields
  const idxResults = idx.search(query);
  idxResults.forEach((result) => {
    results.push(documents.find((doc) => doc.id === result.ref));
  });

  // Search resources
  const resourceResults = resourceIdx.search(query);
  resourceResults.forEach((result) => {
    documents.forEach((doc) => {
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
    documents.forEach((doc) => {
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

// Example usage:
// import rawData from "./seedDocs/rawData.js";
// console.log(JSON.stringify(strictSearch(rawData, "Gazeta")));

export default strictSearch