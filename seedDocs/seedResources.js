import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const inputResourceType = [
  { name: "Facebook" },
  { name: "Instagram" },
  { name: "Telegram" },
  { name: "Bitcoin" },
  { name: "Credit card" },
  { name: "Webpage" },
  { name: "PayPal" },
];

export default async function seedResourceKeywords() {
  for (const entry of inputResourceType) {
    const existingEntry = await prisma.TypesOfResource.findUnique({
      where: { name: entry.name },
    });
    if (existingEntry) {
      console.log(entry.name + " already there");
    } if (!existingEntry) {
      await prisma.TypesOfResource.create({
        data: { name: entry.name },
      });
      console.log(entry.name + " created");
    }
  }
}