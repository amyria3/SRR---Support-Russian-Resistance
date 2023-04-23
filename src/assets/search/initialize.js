import lunr from "lunr";

function initialize(data) {

// Create a lunr index for the top-level fields
const idx = lunr(function () {
  this.ref("id");
  this.field("name");
  this.field("description");

  data.forEach(function (doc) {
    this.add(doc);
  }, this);
});

// Create a lunr index for the allResources array
const resourceIdx = lunr(function () {
  this.ref("id");
  this.field("description");

  data.forEach(function (entry) {
    entry.allResources.forEach(function (resource) {
      this.add(resource);
    }, this);
  }, this);
});

// Create a lunr index for the allLinkedKeywords array
const keywordIdx = lunr(function () {
  this.ref("id");
  this.field("protoKeyword");

  data.forEach(function (entry) {
    entry.allLinkedKeywords.forEach(function (keyword) {
      this.add(keyword);
    }, this);
  }, this);
});

const indexa = {idx, resourceIdx, keywordIdx}
console.log("initialize.js / INDEXA created : " + JSON.stringify(indexa))
return indexa
}

export default initialize