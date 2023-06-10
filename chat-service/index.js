const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: '*',
    methods: [ 'GET', 'POST' ],
  },
});

app.use(express.static(path.resolve(__dirname, 'public')));
const users = []


io.on('connection', (socket)=> {
  users.push(socket.id);
  console.log('connected', socket.id);
  console.log('users', users);

  io.of('/admin').emit('users', users);

  socket.on('message/client-send', (data)=> {
    console.log('message/client-send', data);
    io.of('/admin').emit('message/server-recieved', data);
  })

  socket.on('message/client-recieved', (data)=> {
    console.log('message/client-recieved', data);
    io.to(data.socketId).emit('message/server-send', data);
  });

  socket.on('disconnect', () => {
    console.log('disconnected', socket.id);
    users.filter((user) => user !== socket.id);

    io.of('/admin').emit('users', users);
  });
})

io.of('/admin').on('connection', (socket) => {
  console.log('Admin connected', socket.id);
  socket.emit('users', users);

  socket.on('message/server-send', (data) => {
    console.log('message/server-send', data);
    io.to(data.chatId).emit('message/client-recieved', data);
  });
});


httpServer.listen(5050, () => {
  console.log('Server started on port 5050');
});
