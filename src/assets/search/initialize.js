import lunr from "lunr";

function initialize(data) {

// Create a lunr index for the top-level fields
const idx = lunr(function () {
  this.ref("id");
  this.field("name");
  this.field("description");

  data.forEach(function (entry) {
    this.add(entry);
  }, this);
});

// Create a lunr index for the resources array
const resourceIdx = lunr(function () {
  this.ref("id");
  this.field("description");
  this.field("resourceType");
  this.field("url");

  data.forEach(function (entry) {
    entry.resources.forEach(function (resource) {
      this.add({
        id: resource.id,
        description: resource.description,
        resourceType: resource.resourceType,
        url: resource.url
      });
    }, this);
  }, this);
});

// Create a lunr index for the keywords array
const keywordIdx = lunr(function () {
  this.ref("id");
  this.field("protoKeyword");

  data.forEach(function (entry) {
    entry.keywords.forEach(function (keyword) {
      this.add({
        id: keyword.id,
        protoKeyword: keyword.protoKeyword
      });
    }, this);
  }, this);
});

const indexa = {idx, resourceIdx, keywordIdx}
console.log("initialize.js / INDEXA created : " + JSON.stringify(indexa))
return indexa
}

export default initialize