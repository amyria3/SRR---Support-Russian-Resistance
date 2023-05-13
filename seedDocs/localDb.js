// import uniqid from 'uniqid';

// console.log(uniqid())

// function generateAllIds(dataSet) {
//   for (const entry of dataSet) {
//     entry.id = uniqid();
//     for (const keyword of entry.keywords) {
//       keyword.id = uniqid();
//     }
//     for (const resource of entry.resources) {
//       resource.id = uniqid();
//     }
//   }
//   return dataSet;
// }

const localDb = [ { id: '13see40diqjlhltnr1k',
    img_url: '',
    name: 'Soldiers mothers',
    description: 'Soldiers Mothers is a human rights organization that has existed since 1991 and focuses on military service members. The NGO originally campaigned against mistreatment and for the investigation of crimes in the Russian army. Today, Soldiers Mothers counsels pacifists, drafted young men, and conscripted soldiers. Soldiers Mothers is based on the European Convention on Human Rights and the Constitution of the RF',
    keywords:
     [ { id: '13see40diqjlhltnr1l', name: 'Human rights' },
       { id: '13see40diqjlhltnr1m', name: 'Legal assistance' },
       { id: '13see40diqjlhltnr1n', name: 'Anti-war movement' },
       { id: '13see40diqjlhltnr1o', name: 'Transparency' } ],
    resources:
     [ { id: '13see40diqjlhltnr1p',
         url: 'https://soldiersmothers.ru/',
         description: '',
         ngoId: '',
         usedTags: [ { id: '', name: 'Webpage' } ] },
       { id: '13see40diqjlhltnr1q',
         url: 'https://t.me/solmspb',
         description: '',
         ngoId: '',
         usedTags: [ { id: '', name: 'Telegram' } ] },
       { id: '13see40diqjlhltnr1r',
         url: 'https://soldiersmothers.ru/donate',
         description: '',
         ngoId: '',
         usedTags: [ { id: '', name: 'Credit card' } ] } ] },
  { id: '13see40diqjlhltnr1s',
    name: 'Novaja Gazeta',
    img_url: '',
    description: 'Nowaya Gazeta is an independent investigative newspaper. It is published in Moscow, in regions within Russia, and in some foreign countries. (Wikipedia, 14.04.2023)',
    keywords:
     [ { id: '13see40diqjlhltnr1t', name: 'Transparency' },
       { id: '13see40diqjlhltnr1u', name: 'Freedom of speech' } ],
    resources:
     [ { id: '13see40diqjlhltnr1v',
         url: 'https://www.instagram.com/novayagazeta/',
         description: '',
         ngoId: '',
         usedTags: [ { id: '', name: 'Webpage' } ] },
       { id: '13see40diqjlhltnr1w',
         url: 'https://t.me/novaya_pishet',
         description: '',
         ngoId: '',
         usedTags: [ { id: '', name: 'Telegram' } ] } ] },
  { id: '13see40diqjlhltnr1x',
    name: 'OWD info',
    img_url: '',
    description: 'OWD info is a donation-funded NGO that provides care, legal assistance, and psychological support to those arrested, especially political prisoners.',
    keywords:
     [ { id: '13see40diqjlhltnr1y', name: 'Human rights' },
       { id: '13see40diqjlhltnr1z', name: 'Legal assistance' } ],
    resources:
     [ { id: '13see40diqjlhltnr20',
         url: 'https://donate.ovdinfo.org/crypto#crypto-about',
         description: '',
         ngoId: '',
         usedTags: [ { id: '', name: 'Crypto' } ] } ] },
  { id: '13see40diqjlhltnr21',
    name: 'DOXA journal',
    img_url: '',
    description: 'DOXA is an independent Russian online magazine that deals with current social, political and cultural issues. DOXA was founded in 2017 by a group of students and has since gained a large number of followers. DOXA has been reporting consistently since the beginning of the war.',
    keywords: [ { id: '13see40diqjlhltnr22', name: 'Freedom of speech' } ],
    resources:
     [ { id: '13see40diqjlhltnr23',
         url: 'https://www.patreon.com/doxajournal',
         description: '',
         ngoId: '',
         usedTags: [ { id: '', name: 'PayPal' } ] },
       { id: '13see40diqjlhltnr24',
         url: 'https://www.instagram.com/doxa_journal/',
         description: '',
         ngoId: '',
         usedTags: [ { id: '', name: 'Instagram' } ] },
       { id: '13see40diqjlhltnr25',
         url: 'https://t.me/doxajournal',
         description: '',
         ngoId: '',
         usedTags: [ { id: '', name: 'Telegram' } ] } ] },
  { id: '13see40diqjlhltnr26',
    name: 'Recruits School',
    img_url: '',
    description: 'The human rights and educational project Recruits School appeared in 2009 in Chelyabinsk. The goals are:      `Training of conscripts, their parents, servicemen and alternative servicemen how they can independently, without the help of expensive lawyers, cope with arising problems and protect their right; providing advice on military conscription and timely free qualified legal assistance. In 2014, this project was transformed into an autonomous non-profit human rights organization Recruits School.',
    keywords:
     [ { id: '13see40diqjlhltnr27', name: 'Legal assistance' },
       { id: '13see40diqjlhltnr28', name: 'Human rights' } ],
    resources:
     [ { id: '13see40diqjlhltnr29',
         url: 'https://netprizyvu.ru/',
         description: '',
         ngoId: '',
         usedTags: [ { id: '', name: 'Webpage' } ] },
       { id: '13see40diqjlhltnr2a',
         url: 'https://t.me/netprizyvu',
         description: '',
         ngoId: '',
         usedTags: [ { id: '', name: 'Telegram' } ] },
       { id: '13see40diqjlhltnr2b',
         url: 'https://www.youtube.com/channel/UCZqYE3i_CybXMU1etCOhfOQ',
         description: '',
         ngoId: '',
         usedTags: [ { id: '', name: 'YouTube' } ] },
       { id: '13see40diqjlhltnr2c',
         url: 'https://ok.ru/shkolapriz',
         description: '',
         ngoId: '',
         usedTags: [ { id: '', name: 'Webpage' } ] } ] },
  { id: '13see40diqjlhltnr2d',
    name: 'The first department',
    img_url: '',
    description: 'The First Department is an association of human rights activists* and lawyers* and opposes the closure of legal cases to falsification. The First Department of the Investigative Directorate of the FSB investigates cases of high treason and espionage. The First Department of Courts ensures the prosecution of such cases. The First Department for Enterprises is responsible for classification and secrecy of documents. Our First Department works to ensure that the employees of all First Departments in the country comply with the laws of the Russian Federation. They -lock and barricade [...].',
    keywords:
     [ { id: '13see40diqjlhltnr2e', name: 'Legal assistance' },
       { id: '13see40diqjlhltnr2f', name: 'Human rights' },
       { id: '13see40diqjlhltnr2g', name: 'Transparency' } ],
    resources:
     [ { id: '13see40diqjlhltnr2h',
         url: 'https://dept.one/#donate',
         description: '',
         ngoId: '',
         usedTags: [ { id: '', name: 'Crypto' } ] } ] } ]


export default localDb;