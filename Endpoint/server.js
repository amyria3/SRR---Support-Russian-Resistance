// const express = require("express");
// const { PrismaClient } = require("@prisma/client");
// // const { Neon } = require("@neon-bindings/neon-storage");

// const app = express();
// const prisma = new PrismaClient();

// app.use(express.json());

// app.get("/", async (req, res) => {
//   const elements = await prisma.typesOfRessource.findMany();
//   res.json(elements);
// });

// // app.post("/upload", async (req, res) => {
// //   const { filename, data } = req.body;
// //   const neon = new Neon(process.env.NEON_API_KEY, process.env.NEON_API_SECRET);
// //   const result = await neon.upload(filename, data);
// //   res.json(result);
// // });

// app.listen(process.env.PORT || 3000, () => {
//   console.log(`Server listening on port ${process.env.PORT || 3000}`);
// });

// module.exports = app;