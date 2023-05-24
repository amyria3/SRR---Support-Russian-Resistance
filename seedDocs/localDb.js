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

const localDb = [
  {
    id: "13see40diqjlhltnr1k",
    img_url: "",
    name: "Soldiers mothers",
    description:
      "Soldiers Mothers is a human rights organization that has existed since 1991 and focuses on military service members. The NGO originally campaigned against mistreatment and for the investigation of crimes in the Russian army. Today, Soldiers Mothers counsels pacifists, drafted young men, and conscripted soldiers. Soldiers Mothers is based on the European Convention on Human Rights and the Constitution of the RF",
    keywords: [
      { id: "13see40diqjlhltnr1l", name: "Human rights" },
      { id: "13see40diqjlhltnr1m", name: "Legal assistance" },
      { id: "13see40diqjlhltnr1n", name: "Anti-war movement" },
      { id: "13see40diqjlhltnr1o", name: "Transparency" },
    ],
    resources: [
      {
        id: "13see40diqjlhltnr1p",
        url: "https://soldiersmothers.ru/",
        description: "",
        ngoId: "",
        usedTags: [{ id: "", name: "Webpage" }],
      },
      {
        id: "13see40diqjlhltnr1q",
        url: "https://t.me/solmspb",
        description: "",
        ngoId: "",
        usedTags: [{ id: "", name: "Telegram" }],
      },
      {
        id: "13see40diqjlhltnr1r",
        url: "https://soldiersmothers.ru/donate",
        description: "",
        ngoId: "",
        usedTags: [{ id: "", name: "Credit card" }],
      },
    ],
  },
  {
    id: "13see40diqjlhltnr1x",
    name: "OWD info",
    img_url: "",
    description:
      "OWD info is a donation-funded NGO that provides care, legal assistance, and psychological support to those arrested, especially political prisoners.",
    keywords: [
      { id: "13see40diqjlhltnr1y", name: "Human rights" },
      { id: "13see40diqjlhltnr1z", name: "Legal assistance" },
    ],
    resources: [
      {
        id: "13see40diqjlhltnr20",
        url: "https://donate.ovdinfo.org/crypto#crypto-about",
        description: "",
        ngoId: "",
        usedTags: [{ id: "", name: "Crypto" }],
      },
    ],
  },
  {
    id: "13see40diqjlhltnr21",
    name: "DOXA journal",
    img_url: "",
    description:
      "DOXA is an independent Russian online magazine that deals with current social, political and cultural issues. DOXA was founded in 2017 by a group of students and has since gained a large number of followers. DOXA has been reporting consistently since the beginning of the war.",
    keywords: [{ id: "13see40diqjlhltnr22", name: "Freedom of speech" }],
    resources: [
      {
        id: "13see40diqjlhltnr23",
        url: "https://www.patreon.com/doxajournal",
        description: "",
        ngoId: "",
        usedTags: [{ id: "", name: "PayPal" }],
      },
      {
        id: "13see40diqjlhltnr24",
        url: "https://www.instagram.com/doxa_journal/",
        description: "",
        ngoId: "",
        usedTags: [{ id: "", name: "Instagram" }],
      },
      {
        id: "13see40diqjlhltnr25",
        url: "https://t.me/doxajournal",
        description: "",
        ngoId: "",
        usedTags: [{ id: "", name: "Telegram" }],
      },
    ],
  },
  {
    id: "13see40diqjlhltnr26",
    name: "Recruits School",
    img_url: "",
    description:
      "The human rights and educational project Recruits School appeared in 2009 in Chelyabinsk. The goals are:      `Training of conscripts, their parents, servicemen and alternative servicemen how they can independently, without the help of expensive lawyers, cope with arising problems and protect their right; providing advice on military conscription and timely free qualified legal assistance. In 2014, this project was transformed into an autonomous non-profit human rights organization Recruits School.",
    keywords: [
      { id: "13see40diqjlhltnr27", name: "Legal assistance" },
      { id: "13see40diqjlhltnr28", name: "Human rights" },
    ],
    resources: [
      {
        id: "13see40diqjlhltnr29",
        url: "https://netprizyvu.ru/",
        description: "",
        ngoId: "",
        usedTags: [{ id: "", name: "Webpage" }],
      },
      {
        id: "13see40diqjlhltnr2a",
        url: "https://t.me/netprizyvu",
        description: "",
        ngoId: "",
        usedTags: [{ id: "", name: "Telegram" }],
      },
      {
        id: "13see40diqjlhltnr2b",
        url: "https://www.youtube.com/channel/UCZqYE3i_CybXMU1etCOhfOQ",
        description: "",
        ngoId: "",
        usedTags: [{ id: "", name: "YouTube" }],
      },
      {
        id: "13see40diqjlhltnr2c",
        url: "https://ok.ru/shkolapriz",
        description: "",
        ngoId: "",
        usedTags: [{ id: "", name: "Webpage" }],
      },
    ],
  },
  {
    id: "13see40diqjlhltnr2d",
    name: "The first department",
    img_url: "",
    description:
      "The First Department is an association of human rights activists* and lawyers* and opposes the closure of legal cases to falsification. The First Department of the Investigative Directorate of the FSB investigates cases of high treason and espionage. The First Department of Courts ensures the prosecution of such cases. The First Department for Enterprises is responsible for classification and secrecy of documents. Our First Department works to ensure that the employees of all First Departments in the country comply with the laws of the Russian Federation. They -lock and barricade [...].",
    keywords: [
      { id: "13see40diqjlhltnr2e", name: "Legal assistance" },
      { id: "13see40diqjlhltnr2f", name: "Human rights" },
      { id: "13see40diqjlhltnr2g", name: "Transparency" },
    ],
    resources: [
      {
        id: "13see40diqjlhltnr2h",
        url: "https://dept.one/#donate",
        description: "",
        ngoId: "",
        usedTags: [{ id: "", name: "Crypto" }],
      },
    ],
  },
  {
    id: "13see40c4bmli1pe0ps",
    name: "RosKomSvoboda",
    img_url: "",
    description:
      "RosKomSvoboda is a Russian NGO that promotes anonymity and protection of users on the Internet. The Russian-speaking user*s will find here corresponding step-by-step instructions on how to protect their privacy and work around information blocking.",
    keywords: [
      { id: "13see40c4bmli1pe0pt", name: "Freedom of speech" },
      { id: "13see40c4bmli1pe0pu", name: "Human rights" },
      { id: "13see40c4bmli1pe0pv", name: "Transparency" },
    ],
    resources: [
      {
        id: "13see40c4bmli1pe0pw",
        url: "https://safe.roskomsvoboda.org/",
        description: "",
        ngoId: "",
        usedTags: [{ id: "", name: "Webpage" }],
      },
      {
        id: "13see40c4bmli1pe0px",
        url: "https://donate.roskomsvoboda.org",
        description: "",
        ngoId: "",
        usedTags: [{ id: "", name: "Credit card" }],
      },
      {
        id: "13see40c4bmli1pe0py",
        url: "https://donate.roskomsvoboda.org/crypto/",
        description: "",
        ngoId: "",
        usedTags: [{ id: "", name: "Crypto" }],
      },
    ],
  },
  {
    id: "13see40c4bmli1pe0pz",
    name: "Apologia",
    img_url: "",
    description:
      "Apologia provides free counseling and assistance in cases of human rights violations. Travel costs are incurred and bureaucratic fees must also be paid.",
    keywords: [
      { id: "13see40c4bmli1pe0q0", name: "Human rights" },
      { id: "13see40c4bmli1pe0q1", name: "Legal assistance" },
    ],
    resources: [
      {
        id: "13see40c4bmli1pe0q2",
        url: "https://t.me/ApologiaHelp",
        description: "",
        ngoId: "",
        usedTags: [{ id: "", name: "Telegram" }],
      },
    ],
  },
  {
    id: "13see40c4bmli1pe0q3",
    name: "no_torture",
    img_url: "",
    description:
      "The Committee Against Torture has existed since 2000, but has been considered a 'foreign agent' since 2015. The Committee continues to provide - informally - legal advice. Since 2019, there is also the charity fund 'Committee against Torture', which provides psychological, medical or financial support for torture victims, including surgical procedures.",
    keywords: [
      { id: "13see40c4bmli1pe0q4", name: "Human rights" },
      { id: "13see40c4bmli1pe0q5", name: "Legal assistance" },
    ],
    resources: [
      {
        id: "13see40c4bmli1pe0q6",
        url: "https://pytkam.net/en/",
        description: "",
        ngoId: "",
        usedTags: [{ id: "", name: "Webpage" }],
      },
      {
        id: "13see40c4bmli1pe0q7",
        url: "https://donate.pytkam.net/podderzhat/",
        description: "",
        ngoId: "",
        usedTags: [{ id: "", name: "Credit card" }],
      },
      {
        id: "13see40c4bmli1pe0q8",
        url: "https://t.me/no_torture",
        description: "",
        ngoId: "",
        usedTags: [{ id: "", name: "Telegram" }],
      },
      {
        id: "13see40c4bmli1pe0q9",
        url: "https://www.youtube.com/@no_torture",
        description: "",
        ngoId: "",
        usedTags: [{ id: "", name: "YouTube" }],
      },
    ],
  },
  {
    id: "13see40c4bmli1pe0qa",
    name: "ZABRALO",
    img_url: "",
    description:
      "The Committee Against Torture has existed since 2000, but has been considered a 'foreign agent' since 2015. The Committee continues to provide - informally - legal advice. Since 2019, there is also the charity fund 'Committee against Torture', which provides psychological, medical or financial support for torture victims, including surgical procedures.",
    keywords: [
      { id: "13see40c4bmli1pe0qb", name: "Human rights" },
      { id: "13see40c4bmli1pe0qc", name: "Legal assistance" },
      { id: "13see40c4bmli1pe0qd", name: "Freedom of speech" },
    ],
    resources: [
      {
        id: "13see40c4bmli1pe0qe",
        url: "https://zabralo.me/",
        description: "",
        ngoId: "",
        usedTags: [{ id: "", name: "Webpage" }],
      },
      {
        id: "13see40c4bmli1pe0qf",
        url: "https://zabralo.me/#rec436031795",
        description: "",
        ngoId: "",
        usedTags: [{ id: "", name: "Crypto" }],
      },
      {
        id: "13see40c4bmli1pe0qg",
        url: "https://t.me/zabralohelp",
        description: "",
        ngoId: "",
        usedTags: [{ id: "", name: "Telegram" }],
      },
    ],
  },
  {
    id: "13see40c4bmli1pe0qh",
    name: "arestspb",
    img_url: "",
    description:
      "'arestspb' - that means detention St. Petersburg - group organizes / provides assistance to detainees, including transport services and transfers to pre-trial detention.",
    keywords: [
      { id: "13see40c4bmli1pe0qi", name: "Human rights" },
      { id: "13see40c4bmli1pe0qj", name: "Legal assistance" },
      { id: "13see40c4bmli1pe0qk", name: "Freedom of speech" },
      { id: "13see40c4bmli1pe0ql", name: "Emotional assistance" },
    ],
    resources: [
      {
        id: "13see40c4bmli1pe0qm",
        url: "https://t.me/arestspb/971",
        description: "",
        ngoId: "",
        usedTags: [{ id: "", name: "Telegram" }],
      },
    ],
  },
  {
    id: "13see40c4bmli1pe0qn",
    name: "AvtozakLive",
    img_url: "",
    description:
      "AvtozakLive is a human rights media project from Russia. They educate about the current status of repressions by the state and possible protective measures.",
    keywords: [
      { id: "13see40c4bmli1pe0qo", name: "Human rights" },
      { id: "13see40c4bmli1pe0qp", name: "Freedom of speech" },
    ],
    resources: [
      {
        id: "13see40c4bmli1pe0qq",
        url: "https://avtozak.info/",
        description: "",
        ngoId: "",
        usedTags: [{ id: "", name: "Webpage" }],
      },
      {
        id: "13see40c4bmli1pe0qr",
        url: "https://web.telegram.org/k/#@donat_avtozak",
        description: "",
        ngoId: "",
        usedTags: [{ id: "", name: "Crypto" }],
      },
      {
        id: "13see40c4bmli1pe0qs",
        url: "https://www.patreon.com/avtozak",
        description: "",
        ngoId: "",
        usedTags: [{ id: "", name: "Credit Card" }],
      },
      {
        id: "13see40c4bmli1pe0qt",
        url: "https://www.instagram.com/avtozak_live/",
        description: "",
        ngoId: "",
        usedTags: [{ id: "", name: "Instagram" }],
      },
      {
        id: "13see40c4bmli1pe0qu",
        url: "https://www.youtube.com/channel/UCnG-IwlTnkZ7YS-0gvP9YZQ",
        description: "",
        ngoId: "",
        usedTags: [{ id: "", name: "YouTube" }],
      },
      {
        id: "13see40c4bmli1pe0qv",
        url: "https://twitter.com/AvtozakLIVE",
        description: "",
        ngoId: "",
        usedTags: [{ id: "", name: "Twitter" }],
      },
    ],
  },
  {
    id: "13see40c4bmli1pe0qw",
    name: "Rupression",
    img_url: "",
    description:
      "In the fall of 2017 in the city of Penza six people were arrested. Tortured and with the help of falsified evidence, the FSB constructed the criminal case of a terrorist organization called 'Network'. As a result of  torture and more than two years of detention, many of those involved are struggling with serious health problems. Vasily Kuksov and Arman Sagynbaev were diagnosed with open tuberculosis. This website is a soli website for the defendants in the 'Network'-trial. They collect donations and provide indivdual informations about the case.",
    keywords: [
      { id: "13see40c4bmli1pe0qx", name: "Human rights" },
      { id: "13see40c4bmli1pe0qy", name: "Freedom of speech" },
    ],
    resources: [
      {
        id: "13see40c4bmli1pe0qz",
        url: "https://rupression.com/en/",
        description: "",
        ngoId: "",
        usedTags: [{ id: "", name: "Webpage" }],
      },
      {
        id: "13see40c4bmli1pe0r0",
        url: "https://www.facebook.com/rupression",
        description: "",
        ngoId: "",
        usedTags: [{ id: "", name: "Facebook" }],
      },
      {
        id: "13see40c4bmli1pe0r1",
        url: "https://t.me/rupression",
        description: "",
        ngoId: "",
        usedTags: [{ id: "", name: "Telegram" }],
      },
    ],
  },
  {
    id: "13see40c4bmli1pe0r2",
    name: "Open space",
    img_url: "",
    description:
      "Founder Sasha Krynenkova and her team have made it their mission to support activists in solving social problems. Open Space offers a safe place, the possibility to realize own ideas and emotional ideas and emotional support.",
    keywords: [
      { id: "13see40c4bmli1pe0r3", name: "Human rights" },
      { id: "13see40c4bmli1pe0r4", name: "LGTBi" },
      { id: "13see40c4bmli1pe0r5", name: "Women's rights" },
      { id: "13see40c4bmli1pe0r6", name: "Emotional assistance" },
      { id: "13see40c4bmli1pe0r7", name: "Migration and Refugee" },
    ],
    resources: [
      {
        id: "13see40c4bmli1pe0r8",
        url: "https://ospace.org/",
        description: "",
        ngoId: "",
        usedTags: [{ id: "", name: "Webpage" }],
      },
      {
        id: "13see40c4bmli1pe0r9",
        url: "https://www.patreon.com/ospace",
        description: "",
        ngoId: "",
        usedTags: [{ id: "", name: "ApplePay" }],
      },
      {
        id: "13see40c4bmli1pe0ra",
        url: "https://www.facebook.com/spbopenspace/",
        description: "",
        ngoId: "",
        usedTags: [{ id: "", name: "Facebook" }],
      },
      {
        id: "13see40c4bmli1pe0rb",
        url: "https://www.instagram.com/spbopenspace/",
        description: "",
        ngoId: "",
        usedTags: [{ id: "", name: "Instagram" }],
      },
      {
        id: "13see40c4bmli1pe0rc",
        url: "https://www.youtube.com/channel/UC-lxPVqYGLTu1faetfNbBNQ",
        description: "",
        ngoId: "",
        usedTags: [{ id: "", name: "YouTube" }],
      },
    ],
  },
  {
    id: "13see40c4bmli1pe0rd",
    name: "Civil Aid Committee",
    img_url: "",
    description:
      "The NGO provides assistance to refugees and migrants* in need. Svetlana Gannushkina, the head of the committee, names one of the of the committee, is to change the social and governmental attitude towards migrants and refugees, and to reduce racist prejudices, regardless of skin colour and country of origin.",
    keywords: [
      { id: "13see40c4bmli1pe0re", name: "Human rights" },
      { id: "13see40c4bmli1pe0rf", name: "Women's rights" },
      { id: "13see40c4bmli1pe0rg", name: "Emotional assistance" },
      { id: "13see40c4bmli1pe0rh", name: "Migration and Refugee" },
      { id: "13see40c4bmli1pe0ri", name: "Legal assistance" },
    ],
    resources: [
      {
        id: "13see40c4bmli1pe0rj",
        url: "https://refugee.ru/en/programmyi/",
        description: "",
        ngoId: "",
        usedTags: [{ id: "", name: "Webpage" }],
      },
      {
        id: "13see40c4bmli1pe0rk",
        url: "https://www.instagram.com/refugee_help/",
        description: "",
        ngoId: "",
        usedTags: [{ id: "", name: "Instagram" }],
      },
    ],
  },
  {
    id: "13see40c4bmli1pe0rl",
    name: "Sphere",
    img_url: "",
    description:
      "Sphere Foundation is a human rights organization. We bring systemic changes to the daily realities of the Russian LGBT+ community.",
    keywords: [
      { id: "13see40c4bmli1pe0rm", name: "Human rights" },
      { id: "13see40c4bmli1pe0rn", name: "Women's rights" },
      { id: "13see40c4bmli1pe0ro", name: "LGTBi" },
    ],
    resources: [
      {
        id: "13see40c4bmli1pe0rq",
        url: "https://spherequeer.org/en/",
        description: "",
        ngoId: "",
        usedTags: [{ id: "", name: "Webpage" }],
      },
      {
        id: "13see40c4bmli1pe0rr",
        url: "https://www.youtube.com/channel/UCKu6lWazXw5mvaYH0GDJiNQ",
        description: "",
        ngoId: "",
        usedTags: [{ id: "", name: "YouTube" }],
      },
      {
        id: "13see40c4bmli1pe0rs",
        url: "https://www.instagram.com/spherequeer",
        description: "",
        ngoId: "",
        usedTags: [{ id: "", name: "Instagram" }],
      },
      {
        id: "13see40c4bmli1pe0rt",
        url: "https://www.facebook.com/spherequeer",
        description: "",
        ngoId: "",
        usedTags: [{ id: "", name: "Facebook" }],
      },
    ],
  },
  {
    id: "13see40diqjlhltnr1s",
    name: "Novaja Gazeta",
    img_url: "",
    description:
      "Nowaya Gazeta is an independent investigative newspaper. It is published in Moscow, in regions within Russia, and in some foreign countries. (Wikipedia, 14.04.2023)",
    keywords: [
      { id: "13see40diqjlhltnr1t", name: "Transparency" },
      { id: "13see40diqjlhltnr1u", name: "Freedom of speech" },
    ],
    resources: [
      {
        id: "13see40diqjlhltnr1v",
        url: "https://www.instagram.com/novayagazeta/",
        description: "",
        ngoId: "",
        usedTags: [{ id: "", name: "Webpage" }],
      },
      {
        id: "13see40diqjlhltnr1w",
        url: "https://t.me/novaya_pishet",
        description: "",
        ngoId: "",
        usedTags: [{ id: "", name: "Telegram" }],
      },
    ],
  },
];

export default localDb;