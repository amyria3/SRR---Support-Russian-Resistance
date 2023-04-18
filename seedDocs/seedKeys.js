import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const inputDataKeywords = [
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

export default async function seedKeywords() {
  for (const entry of inputDataKeywords) {
    console.log(entry)
    const existingEntry = await prisma.ProtoKeyword.findUnique({
      where: { name: entry.name },
    });
    if (existingEntry) {
      console.log(entry.name + " already there");
    } else if (!existingEntry) {
      await prisma.ProtoKeyword.create({
        data: { name: entry.name },
      });
      console.log(entry.name + " created");
    }
  }
}