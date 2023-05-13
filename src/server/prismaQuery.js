// Note: This script is used to query the Prisma database
//       and return the data to the server.js script
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function prismaQuery() {
  console.log("Hallo dear, askPrisma script is running!")

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
    // console.log("dataArray has :", dataArray.length + " entries.")
    return dataArray
  } catch (error) {
    console.log('Error occurred in askPrisma:', error);
    throw error;
  }
}

export default prismaQuery;
