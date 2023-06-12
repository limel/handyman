const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const path = require("path");
const Chance = require("chance");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
  secure: true,
});

app.use(express.static(path.resolve(__dirname, "front-end/build")));
const chats = [];

io.on("connection", (socket) => {
  if (chats.map((chat) => chat.socketId).includes(socket.id)) {
    return;
  } else {
    const chance = new Chance();
    const name = chance.animal({ type: "pet" });
    const chat = {
      id: socket.id,
      chat_name: name,
      messages: [],
    };
    chats.push(chat);
    io.of("/admin").emit("chats", chats);
  }

  socket.on("message/client-send", (data) => {
    const chat = chats.find((chat) => chat.id === socket.id);
    if (chat) {
      chat.messages.push(data);
      io.of("/admin").emit("chats", chats);
    }
  });

  socket.on("disconnect", () => {
    const index = chats.findIndex((chat) => chat.id === socket.id);
    if (index !== -1) {
      chats.splice(index, 1);
      io.of("/admin").emit("chats", chats);
    }
  });
});

io.of("/admin").on("connection", (socket) => {
  socket.on('message/server-send', (data) => {
    const chat = chats.find((chat) => chat.id === data.id);
    if (chat) {
      chat.messages.push(data);
      io.to(data.id).emit("message/client-recieved", data);
      io.of("/admin").emit("chats", chats);
    }
  });
});

httpServer.listen(5050, () => {
  console.log("Server started on port 5050");
});
