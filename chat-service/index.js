const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const path = require("path");
const cors = require("cors");
const Chance = require("chance");
const TelegramBot = require("node-telegram-bot-api");

const TELEGRAM_TOKEN = process.env.BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.CHAT_ID;

const login = "admin";
const pass = "admin";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "front-end/build")));

const authentificate = (req, res, next) => {
  const reqLogin = req.headers.login;
  const reqPass = req.headers.password;

  if (reqLogin === login && reqPass === pass) {
    req.isAuthenticated = true;
  } else {
    req.isAuthenticated = false;
  }
  next();
};

app.post("/api/login", authentificate, (req, res) => {
  if (req.isAuthenticated) {
    // Authentication successful
    res.status(200).send("Authentication successful");
  } else {
    // Authentication failed
    res.status(401).send("Authentication failed");
  }
});

const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
  secure: true,
});


const chats = [];
const bot = new TelegramBot(TELEGRAM_TOKEN);

io.on("connection", (socket) => {
  let isFirstMessage = true;
  if (chats.map((chat) => chat.socketId).includes(socket.id)) {
    return;
  } else {
    const chance = new Chance();
    const name = chance.animal({ type: "grassland" });
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
      if (isFirstMessage) {
        bot.sendMessage(TELEGRAM_CHAT_ID, "You have a new message! Check admin panel http://acumen-handyman.com:5050/");
        isFirstMessage = false; // Set the flag to false after the first message
      }
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
  socket.on("message/server-send", (data) => {
    const chat = chats.find((chat) => chat.id === data.id);
    if (chat) {
      chat.messages.push(data);
      io.to(data.id).emit("message/client-recieved", data);
      io.of("/admin").emit("chats", chats);
    }
  });
});

httpServer.listen(5050, () => {});
