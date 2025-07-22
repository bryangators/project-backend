import express from 'express';
import 'dotenv/config';

import { projectRouter } from './routes/projectRouter';

const app = express()

app.use(express.json());

const port = 3000;

app.use("/projects", projectRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})