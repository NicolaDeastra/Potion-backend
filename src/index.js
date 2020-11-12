import express from 'express';
import dotenv from 'dotenv';

import './db/index';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hallow duniaw');
});

app.listen(port, () =>
  console.log(`Server run on Port : http://localhost:${port}`)
);
