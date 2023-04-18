import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function askPrisma() {
  console.log("query.js, asking Prisma");
  const elements = await prisma.ngo.findMany({
    orderBy: {
      id: 'asc'
    },
    include: {
      allRessources: true,
      allLinkedKeywords: true
    }
  });
  console.log("query.js, line 15" + typeof(elements) + JSON.stringify(elements))
  return elements;
}

export default askPrisma;