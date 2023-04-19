import seedKeywords from "./seedKeys.js";
import seedResourceKeywords from "./seedResources.js";
import seedNgos from "./seedNgo.js";

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

  const resourceType = [
    { name: "Facebook" },
    { name: "Instagram" },
    { name: "Telegram" },
    { name: "Bitcoin" },
    { name: "Credit card" },
    { name: "Webpage" },
    { name: "PayPal" },
  ];
//take an ngo from localDb
import { rawData } from "./rawData.js";

seedKeywords(ngoKeywords);
seedResourceKeywords(resourceType);
seedNgos(rawData)