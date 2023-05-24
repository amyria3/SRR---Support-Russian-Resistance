import seedKeyword from "./seedKeyword.js";
import seedTag from "./seedTag.js";
import seedNgo from "./seedNgo.js";
import localDB from "./localDb.js";


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
  { name: "Twitter" },
  { name: "YouTube" },
  { name: "ApplePay" },
];

async function different() {
  try {
    // await seedTag(resourceTags);
    // await seedKeyword(ngoKeywords);
    await seedNgo(localDB);
  } catch (error) {
    console.error("Seeding failed with error: ", error);
  }
}

different();