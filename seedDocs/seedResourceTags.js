import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function seedResourceusedTags(data) {
  for (const entry of data) {
    console.log(entry);
    const existingEntry = await prisma.ResourceTag.create({
      data: {
        name: entry.name,
      },
    });
  }
}
