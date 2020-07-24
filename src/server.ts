import express from "express";

const app = express();

app.get("/", (resquest, response) => {
  return response.json({  message: 'Hello Worlds' });
});

app.listen(3333);
