import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function seedTag(data) {
  for (const entry of data) {
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
    // console.log("Just finished : " + JSON.stringify(createdEntry))
  }
}