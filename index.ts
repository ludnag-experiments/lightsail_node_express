import express from "express";
import io from "socket.io";
import { createServer } from "http";

const expressApp = express();
const httpServer = createServer(expressApp);

const PORT = 3001;

/* So if we want authentication, check some things on the req object, */
/* and use some middlewares? */
expressApp.get("/", (req, res) => {
  res.send({ foo: "bar" });
});

expressApp.get("/:name", (req, res) => {
  res.send(`Hello, ${req.params.name}`);
});

const ioServer = new io.Server(httpServer, {});

ioServer.on("connection", (socket) => {
  console.log("Socket connected!");
  socket.emit("message", "Hi from server!");

  socket.on("message", (data) => {
    console.log("received message:");
    console.log(data);
  });
});

httpServer.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

console.log("Hello world!");
