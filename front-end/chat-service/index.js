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

const adminPanel = io.of('/');

adminPanel.on('connection', (socket) => {
  console.log('Admin panel conntected', socket.id);

  socket.on('message/send', (message) => {
    console.log('Received message:', message);

    // Echo the message back to the client
    io.emit('message/receive', message);
  });
});

io.on('connection', (socket) => {
  console.log('A new client connected', socket.id);
  socket.on('message/send', (message) => {
    console.log('Received message:', message);

    // Echo the message back to the client
    // socket.send(`You sent: ${ message }`);
    adminPanel.emit('message/receive', message);
  });
});

httpServer.listen(5050, () => {
  console.log('Server started on port 5050');
});

// const
// const app = express();

// app.use(cors());

// const server = require('http').createServer(app);

// app.use(express.json());

// app.use(express.static(path.resolve(__dirname, 'public')));
// const wss = new WebSocket.Server({ server });

// // WebSocket connection event
// wss.on('connection', (ws) => {
//   console.log('A new client connected');

//   // WebSocket message event
//   ws.on('message', (message) => {
//     console.log('Received message:', message);

//     // Echo the message back to the client
//     ws.send(`You sent: ${ message }`);
//   });
// });

// // Express route for serving HTML file
// app.get('/', (req, res) => {
//   res.sendFile(`${ __dirname }/index.html`);
// });

// // Start the server
// server.listen(5050, () => {
//   console.log('Server started on port 5050');
// });
