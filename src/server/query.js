import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function askPrisma() {
  console.log("query.js, asking Prisma");
  const elements = await prisma.ngo.findMany({
    orderBy: {
      id: 'asc'
    },
    include: {
      id: true,
      name: true,
      description: true,
      keywords: true,
      allResources: true,
    },
  });
  return elements;
}

export default askPrisma;