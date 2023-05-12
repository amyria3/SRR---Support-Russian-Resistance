import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import localDb from "./localDb.js";

export default async function seedNgo(data) {

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
    // "NGO or group " + entry.name + " has been updated or created. "
    //);

    //for every string in keywords[] array of the current entry
    for (const locallyStoredKeyword of entry.keywords) {
      const updatedNgosKeywords = await prisma.Ngo.update({
        where: { name: entry.name },
        data: {
          keywords: {
            connect: { name: locallyStoredKeyword.name },
          },
        },
      });
      // console.log(
      // updatedNgosKeywords + "'s keywords missing entries have been updated."
      //);

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
        //  console.log(
        //   "Added " +
        //     locallyStoredResource.url +
        //     " of " +
        //     entry.name +
        //     ", if it was missing. Current Ngo ID : " +
        //     upsertEntry.id
        // );
        //throws an error. But works. (?!)

        //take the newly created / updated resource-Object
        //map over all strings of the remote resource object

        for (const localTag of locallyStoredResource.usedTags) {
          //
          const response = await prisma.Resource.update({
            where: { id: upsertResource.id },
            data: {
              usedTags: {
                connect: { name: localTag.name },
              },
            },
          });

          // console.log(
          //   "Added " +
          //     localTag.name +
          //     " to " +
          //     upsertResource.url +
          //     ", if it was missing. Current Ngo ID : " +
          //     upsertResource.id
          // );
        }
      }
    }
  }
}

// console.log(seedNgo(localDb));
