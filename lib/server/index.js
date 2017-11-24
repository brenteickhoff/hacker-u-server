import express from 'express';
import { server } from './../../config';

const PORT = server.port;
const app = express();

export const startExpressServer = () => {
  app.listen(PORT, () => {
    console.log(`:) Node Express serving http://localhost:${PORT}`);
    app.get('/', (req, res) => res.send('Hello Hacker U'));
  });
};

