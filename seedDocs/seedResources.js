import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function seedResourceKeywords(data) {
  for (const entry of data) {
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