import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function seedKeyword(data) {
  for (const entry of data) {
    //console.log(entry);
    const existingEntry = await prisma.ProtoKeyword.upsert({
      where: { name: entry.name },
      create: {
        name: entry.name,
      },
      update: {},
    });

    // console.log(JSON.stringify(existingEntry) + " created or updated");
  }
}
