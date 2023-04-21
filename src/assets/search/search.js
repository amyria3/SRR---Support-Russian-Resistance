import lunr from "lunr";
import { rawData } from "./seedDocs/rawData.js";

const documents = rawData;

// Create a lunr index for the top-level fields
const idx = lunr(function () {
  this.ref("id");
  this.field("name");
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
  this.field("url");
  this.field("resourceType");

  documents.forEach(function (entry) {
    entry.resources.forEach(function (resource) {
      this.add(resource);
    }, this);
  }, this);
});

// Combine the search results from both indexes

function Result(myTerm) {
  const idxResults = idx.search(myTerm);
  const resourceIdxResults = resourceIdx.search(myTerm);

  // Get the IDs of the matched documents from both indexes
  const matchedIds = [
    ...idxResults.map((result) => result.ref),
    ...resourceIdxResults.map((result) => result.ref),
  ];

  // Filter the original documents array to get the matching objects
  const matchedDocs = documents.filter((doc) => matchedIds.includes(doc.id));

  // Replace the matched term with the term wrapped in a <mark> tag
  const markedDocs = matchedDocs.map((doc) => {
    const markedName = doc.name.replace(
      new RegExp(myTerm, "gi"),
      `<mark>${myTerm}</mark>`
    );
    const markedDescription = doc.description.replace(
      new RegExp(myTerm, "gi"),
      `<mark>${myTerm}</mark>`
    );
    const markedKeywords = doc.keywords
      .map((keyword) =>
        keyword.toLowerCase().includes(myTerm.toLowerCase())
          ? `<mark>${keyword}</mark>`
          : keyword
      )
      .join(", ");
    const markedResources = doc.resources.map((resource) => ({
      ...resource,
      description: resource.description.replace(
        new RegExp(myTerm, "gi"),
        `<mark>${myTerm}</mark>`
      ),
    }));

    return {
      ...doc,
      name: markedName,
      description: markedDescription,
      keywords: markedKeywords,
      resources: markedResources,
    };
  });

  return markedDocs;
}

console.log(Result("Freedom"));
