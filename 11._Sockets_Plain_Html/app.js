import express from "express";
const app = express();
app.use(express.static("public"));

import http from "http";
const server = http.createServer(app);

import { Server } from "socket.io";
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("Client is connencted to ", socket.id);

  socket.on("client choose a color", (data) => {
    // broadcasts to ALL sockets in the io namespace
    io.emit("a color was chosen", data);

    // sends to all EXCEPT the socket itself
    // socket.broadcast.emit("a color was chosen", data);

    // ONLY emits to the socket itself
    // socket.emit("a color was chosen", data);
  });
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => console.log("Port is running on port " + PORT));
