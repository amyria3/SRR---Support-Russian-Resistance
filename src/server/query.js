import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();



async function askPrisma() {

  console.log("Hallo")

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
            usedTags: true,
          }
        },
      },
    });
    console.log("dataArray :", dataArray)
    return dataArray
  } catch (error) {
    console.log('Error occurred in askPrisma:', error);
    throw error;
  }
}

export default askPrisma;
