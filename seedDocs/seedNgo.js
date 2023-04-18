import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//take an ngo
import { rawData } from "./rawData.js";

//take ngos's name & ask Prisma, if already exists
export default async function seedNgos() {
  for (const entry of rawData) {
    console.log("checking, if " + entry.name + " already exists.");
    const existingEntry = await prisma.Ngo.findUnique({
      where: { name: entry.name },
    });
    if (existingEntry) {
      console.log(entry.name + " already exists.");
    } else if (!existingEntry) {
      console.log(entry.name + " is not there yet. Creating now: ");

      const ngoCreated = await prisma.Ngo.create({
        data: {
          name: entry.name,
          description: entry.description,
          img_url: entry.img_url,
        },
      });

      ngoCreated&&console.log(ngoCreated.name + " created.")

      for (const resource of entry.resources) {
        console.log(entry.resources)
        const resourceCreated = await prisma.Resource.create({
          data: {
            url: resource.url,
            ngo: ngoCreated.id,
            typeOfResourceName: resource.typeOfResourceName,
          },
        });
      }
      //const resourcesAdded = await prisma.resource.create({
        //   map over resources and create them
        //   use createMany
      //});

      console.log(entry.name + " created");
    }
  }
}

//if NO, create

//if yes, UPDATE
//update img_url & description
////go into allResources
////
