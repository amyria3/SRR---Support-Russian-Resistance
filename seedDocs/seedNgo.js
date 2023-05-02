import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import localDb from "./localDb.js";

export default async function seedNgos(data) {
  //for every entry in localDB
  for (const entry of data) {
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
    // console.log(
    //   "NGO or group " + entry.name + " has been updated or created. "
    // );

    for (const locallyStoredKeyword of entry.keywords) {
      //for every string in keywords[] array of the current entry
      const updatedNgosKeywords = await prisma.Ngo.update({
        where: { name: entry.name },
        data: {
          keywords: {
            connect: { name: locallyStoredKeyword },
          },
        },
      });
      console.log(
        updatedNgosKeywords + "'s keywords missing entries have been updated."
      );
    }

    //create resources, if missing:
    for (const locallyStoredResource of entry.resources) {

      //for every entry in the resources[] array
      const upsertResource = await prisma.Resource.upsert({
        where: {
          url: locallyStoredResource.url,
        },
        update: {
          ngoId: upsertEntry.id,
          description: locallyStoredResource.description,
        },
        create: {
          url: locallyStoredResource.url,
          ngoId: upsertEntry.id,
          description: locallyStoredResource.description,
        },
      });
      console.log("Added " + locallyStoredResource.url + " of " + entry.name + ", if it was missing. Current Ngo ID : " + upsertEntry.id)
      //throws an error. But works. (?!)


      // for (const locallyStoredResource of entry.resources) {
      //   //for every entry in the resources[] array
      //   const upsertResource = await prisma.ngo.resource.upsert({
      //     where: {
      //       url: locallyStoredResource.url,
      //     },
      //     update: {
      //       ngoId: existingEntry.id,
      //       resourceType: ngoResource.resourceType,
      //     },
      //     create: {
      //       url: ngoResource.url,
      //       ngoId: existingEntry.id,
      //       resourceType: ngoResource.resourceType,
      //     },
      //   });

      //   const updateResource = await prisma.ngo.resource.update({
      //     where: { name: entry.name },
      //     data: {
      //       keywords: {
      //         connect: { name: locallyStoredKeyword },
      //       },
      //     },
      //   });
    }
  }
}

console.log(seedNgos(localDb));
