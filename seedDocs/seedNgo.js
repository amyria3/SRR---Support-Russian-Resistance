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
      ngoCreated && console.log(ngoCreated.name + " created.");
      console.log(entry.name + " created");
    }
  }
  for (const entry of rawData) {
    const existingEntry = await prisma.Ngo.findUnique({
      where: { name: entry.name },
    });
    console.log("HERE => " + JSON.stringify(existingEntry));
    if (existingEntry) {

      console.log(entry.name + " already exists.");

      for (const ngoResource of entry.resources) {

        console.log(entry.name + " already exists.");
        console.log("HALLO BENI!" + ngoResource.resourceType, typeof(ngoResource.resourceType))

        const resourceCreated = await prisma.resource.create({
          data: {
            ngoId: existingEntry.id,
            url: ngoResource.url,
            resourceType: ngoResource.resourceType,
          },
        });
      }
    } else if (!existingEntry) {
      console.log("pass");
    }
  }
}

//if NO, create

//if yes, UPDATE
//update img_url & description
////go into allResources
////
