import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//take ngos's name & ask Prisma, if already exists
export default async function seedNgos(localDb) {
  for (const entry of localDb) {
    console.log(" Checking, if " + entry.name + " already exists. ");
    //update, if there, create, if not there yet:
    const upsertEntry = await prisma.Ngo.upsert({
      where: {
        name: entry.name,
      },
      update: {
        description: entry.description,
        img_url: entry.img_url,
      },
      create: {
        name: entry.name,
        description: entry.description,
        img_url: entry.img_url,
      },
    });
    console.log(entry.name + " Has been updated or created. ");

    //After all entries have been created or updated on the upper level
    //update or create resources:
    for (const entry of localDb) {
      const existingEntry = await prisma.Ngo.findUnique({
        where: { name: entry.name },
      });
      if (existingEntry) {
        for (const ngoResource of entry.resources) {
          console.log(" " + entry.name + " exists. Updating resources : ");

          const upsertResource = await prisma.resource.upsert({
            where: {
              url: ngoResource.url,
            },
            update: {
              ngoId: existingEntry.id,
              resourceType: ngoResource.resourceType,
            },
            create: {
              url: ngoResource.url,
              ngoId: existingEntry.id,
              resourceType: ngoResource.resourceType,
            },
          });
          console.log(upsertResource.url + "Has been added or updated");
        }
      }
    }
  }
}
