import express from 'express';
import cors from 'cors';
import prismaQuery from './prismaQuery.js'

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

//console.log("reading server.mjs, line 10")

app.get('/api/ngo-data', async (req, res) => {
  //console.log("server.mjs, line 13, going to ask Prisma")
  const data = await prismaQuery();
  //console.log("server.mjs, data I received has " + data.length + " entries.")
  //console.log("server.mjs, line 15, just asked Prisma")
  res.json(data);
});

app.listen(port, () => {
  //console.log(`Server running on port ${port}`);
});