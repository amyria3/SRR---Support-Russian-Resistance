import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function seedKeywords(data) {
  for (const entry of data) {
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