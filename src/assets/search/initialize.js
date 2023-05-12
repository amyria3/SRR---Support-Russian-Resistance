import lunr from "lunr";

function initialize(data) {
  const idx = lunr(function () {
    this.ref("id");
    this.field("name");
    this.field("description");
    this.field("keywords");
    this.field("usedTags");

    data.forEach(function (entry) {
      this.add(entry);

      // include keywords names in the index
      entry.keywords.forEach(function (keyword) {
        this.field("keywords");
        this.add({
          id: entry.id,
          keywords: keyword.name
        });
      }, this);

      // include usedTags names in the index
      entry.resources.forEach(function (resource) {
        resource.usedTags.forEach(function (usedTag) {
          this.field("usedTags");
          this.add({
            id: entry.id,
            usedTags: usedTag.name
          });
        }, this);
      }, this);
    }, this);
  });

  const indexa = { idx };
  return indexa;
}

export default initialize;
