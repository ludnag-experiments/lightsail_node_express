import express from "express";
import http from "http";

const app = express();

const PORT = 3001;

app.use(express.json());
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

/* So if we want authentication, check some things on the req object, */
/* and use some middlewares? */
app.get("/", (req, res) => {
  res.send({ foo: "bar" });
});

app.get("/:name", (req, res) => {
  res.send(`Hello, ${req.params.name}`);
});

console.log("Hello world!");
