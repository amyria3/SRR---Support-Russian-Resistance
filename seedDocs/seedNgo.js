import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import updateData from "./updateData.js";

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
  }
}

const updatedResource = await prisma.resource.keywords.upsert({
  where: { name: entry.resource.keyword.name },
  create: {
    data: { name: entry.resource.keyword.name }
  }
})

// //After all entries have been created or updated on the upper level
// //update or create resources:
// for (const entry of localDb) {
//   const upsertEntry = await prisma.Ngo.findUnique({
//     where: { name: entry.name },
//   });
//   if (upsertEntry) {
//     for (const ngoResource of entry.Resource) {
//       console.log(" " + entry.name + " exists. Updating resources : ");

//       const updatedResource = await prisma.resource.update({
//         where: { id },
//         data: { keywords: { set: keywords } }
//       })
//       console.log(updatedResource)

// const upsertResource = await prisma.ngo.resource.upsert({
//   where: {
//     url: ngoResource.url,
//   },
//   update: {
//     ngoId: upsertEntry.id,
//     resourceType: ngoResource.resourceType,
//   },
//   create: {
//     url: ngoResource.url,
//     ngoId: upsertEntry.id,
//     resourceType: ngoResource.resourceType,
//   },
// });
//console.log(upsertResource.url + "Has been added or updated");
//         }
//       }
//     }
//   }
// }

console.log(seedNgos(updateData));
