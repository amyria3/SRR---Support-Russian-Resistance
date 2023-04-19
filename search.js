import lunr from 'lunr';

export const NowayaGazeta = {
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

  export const documents = [NowayaGazeta];

// Create a lunr index for the top-level fields
const idx = lunr(function () {
  this.ref('name');
  this.field('description');
  this.field('keywords');

  documents.forEach(function (doc) {
    this.add(doc);
  }, this);
});

// Create a separate lunr index for the resources array
const resourceIdx = lunr(function () {
  this.ref('id');
  this.field('description');

  documents.forEach(function (doc) {
    doc.resources.forEach(function (resource) {
      this.add(resource);
    }, this);
  }, this);
});

// Combine the search results from both indexes


function Result (myTerm){
    const combinedResults = [
        ...idx.search('Gazeta'),
        ...resourceIdx.search('Gazeta'),
      ];

      return combinedResults
}

console.log(Result("nowaja"))