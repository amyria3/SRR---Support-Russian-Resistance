import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function askPrisma() {
  console.log("asking Prisma");
  const elements = await prisma.ngo.findMany({
    orderBy: {
      id: 'asc'
    },
    include: {
      allRessources: true,
      allLinkedKeywords: true
    }
  });
  console.log("asked Prisma");
  return elements;
}

export default askPrisma;