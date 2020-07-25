import express from 'express';

const app = express();

app.get('/', (resquest, response) => response.json({ message: 'Hello Worlds ' }));

app.listen(3333);
