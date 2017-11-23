import express from 'express';

const app = express();
const PORT = 5150;

app.listen(PORT, () => console.log(`Serving http://localhost:${PORT}`));
app.get('/', (req, res) => res.send('Hello Hacker U'));
