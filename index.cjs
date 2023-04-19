const FlexSearch = require('flexsearch');

const NowayaGazeta = {
  name: 'Nowaya Gazeta',
  description:
    'Novaya Gazeta is an independent investigative newspaper. It is published in Moscow, in regions within Russia, and in some foreign countries. (Wikipedia, 14.04.2023)',
  img_url: '',
  keywords: ['Freedom of speech', 'Anti-war movement', 'Transparancy'],
  resources: [
    {
      id: "hardCodedId1",
      url: 'https://novayagazeta.ru/',
      description: 'Web publishing',
      resourceType: 'Webpage',
    },
    {
      id: "hardCodedId2",
      url: 'https://www.instagram.com/novayagazeta/',
      description: 'Infographics & Merchandise',
      resourceType: 'Instagram',
    },
    {
      id: "hardCodedId3",
      url: 'https://t.me/novaya_pishet',
      description: 'Telegram channel',
      resourceType: 'Telegram',
    },
  ],
};

const rawData = [NowayaGazeta];


// Define the index and specify which fields to index
const index = new FlexSearch({
  encode: "icase",
  tokenize: "full",
  threshold: 0,
  suggest: false,
  depth: 3,
  doc: {
    id: "id",
    field: [
      "name",
      "description",
      "keywords",
      "resources.description",
      "resources.resourceType",
    ],
  },
});

// Loop over each entry in the rawData array
for (const entry of rawData) {
  // Create a new object with only the fields to index
  const indexedFields = {
    id: entry.name,
    name: entry.name,
    description: entry.description,
    keywords: entry.keywords,
    resources: entry.resources.map((resource) => ({
      description: resource.description,
      resourceType: resource.resourceType,
    })),
  };

  // Add the indexed fields to the index
  index.add(indexedFields.id, indexedFields);
}

const results = index.search("Freedom");
console.log(results); // Output: ['Nowaya Gazeta']

module.exports = index;