import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function seedTag(data) {
  for (const entry of data) {
    console.log(entry);
    const createdEntry = await prisma.ResourceTag.upsert({
      where: {
        name: entry.name,
      },
      create: {
        name: entry.name,
      },
      update: {
      }
    });
  }
}