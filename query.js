import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function all() {
  const elements = await prisma.typesOfRessource.findMany();
  console.log(elements);
}

all()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });