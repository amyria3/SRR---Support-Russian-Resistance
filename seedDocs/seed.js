import seedKeywords from "./seedKeywords.js";
import seedTags from "./seedTags.js";
import seedNgos from "./seedNgos.js";
import localDB from "./localDb.js";

const results = {
  tags: false,
  keywords: false,
  ngos: false,
}

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

const resourceTags = [
  { name: "Facebook" },
  { name: "Instagram" },
  { name: "Telegram" },
  { name: "Crypto" },
  { name: "Credit card" },
  { name: "Webpage" },
  { name: "PayPal" },
];
//take an ngo from localDb
// import { rawData } from "./rawData.js";

function main() {
  seedTags(resourceTags, results.tags)
  console.log(results.tags)
}

main();