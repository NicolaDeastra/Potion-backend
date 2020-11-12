import express from 'express';
import dotenv from 'dotenv';

import './db';
import pagesRouter from './router/pages';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/pages', pagesRouter);

app.listen(port, () => {
  console.log(`Server run on Port : http://localhost:${port}`);
});
