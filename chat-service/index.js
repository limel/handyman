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
    const name = chance.animal({type: 'pet'});
    const chat = {
      socketId: socket.id,
      chat_name: name,
      messages: [],
    };
    chats.push(chat);

    io.of("/admin").emit("chats", chats);
    socket.on("message/client-send", (data) => {
      const message = {
        message: data.message,
        from: data.from,
      };

      chat.messages.push(message);
      io.of("/admin").emit("message/server-recieved", chats);
      console.log(chats);
    });

    socket.on("message/client-recieved", (data) => {
      io.to(data.socketId).emit("message/server-send", data);
    });
  }

  socket.on("disconnect", () => {
    const index = chats.findIndex((chat) => chat.socketId === socket.id)
    if(index !== -1) {
      chats.splice(index, 1);
      io.of("/admin").emit("chats", chats);
    }
  });
});

io.of("/admin").on("connection", (socket) => {
  socket.emit("chats", chats);
  socket.on("message/server-send", (data) => {
    console.log(chats);
    const { chatId } = data;
    const chat = chats.find((chat) => chat.socketId === chatId);
    if (chat) {
      console.log("it catch server-send", chat)
      const newMessage = {...data};
      chat.messages.push(newMessage);
      io.of("/admin").emit("chats", chats);
      io.to(chatId).emit("message/client-recieved", {
        message: data.message,
        socketId: socket.id,
      });
    }
  });
});

httpServer.listen(5050, () => {
  console.log("Server started on port 5050");
});