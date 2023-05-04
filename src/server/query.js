import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


async function askPrisma() {
  try {
    console.log("query.js, asking Prisma");
    const dataArray = await prisma.ngo.findMany({
      orderBy: {
        id: 'asc'
      },
      include: {
        keywords: true,
        resources: {
          include: {
            usedusedTag: true,
          }
        },
      },
    });
    return dataArray
  } catch (error) {
    console.log('Error occurred in askPrisma:', error);
    throw error;
  }
}

export default askPrisma;
