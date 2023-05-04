import seedKeywords from "./seedKeys.js";
import seedResourceusedTag from "./seedResourceusedTag.js";
// import seedNgos from "./seedNgo.js";

//
const ngoKeywords = [
    { name: "Human rights" },
    { name: "Women's rights" },
    { name: "Migration and Refugee" },
    { name: "Legal assistance" },
    { name: "Emotional assistance" },
    { name: "LGTBi" },
    { name: "Anti-war movement" },
    { name: "Freedom of speech" },
    { name: "Medical aid" },
    { name: "Transparency" },
  ];

  const resourceTag = [
    { name: "Facebook" },
    { name: "Instagram" },
    { name: "Telegram" },
    { name: "Crypro" },
    { name: "Credit card" },
    { name: "Webpage" },
    { name: "PayPal" },
  ];
//take an ngo from localDb
// import { rawData } from "./rawData.js";

seedKeywords(ngoKeywords);
seedResourceusedTag(resourceTag);
// seedNgos(rawData)