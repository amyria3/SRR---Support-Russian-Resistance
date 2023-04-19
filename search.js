import lunr from "lunr";
import { rawData } from "./seedDocs/rawData.js";

const documents = rawData;

// Create a lunr index for the top-level fields
const idx = lunr(function () {
  this.ref("name");
  this.field("description");
  this.field("keywords");

  documents.forEach(function (doc) {
    this.add(doc);
  }, this);
});

// Create a separate lunr index for the resources array
const resourceIdx = lunr(function () {
  this.ref("id");
  this.field("description");

  documents.forEach(function (entry) {
    entry.resources.forEach(function (resource) {
      this.add(resource);
    }, this);
  }, this);
});

// Combine the search results from both indexes

function Result(myTerm) {
  const combinedResults = [
    ...idx.search(myTerm),
    ...resourceIdx.search(myTerm),
  ];

  return combinedResults;
}

console.log(Result("Nowaja"));
