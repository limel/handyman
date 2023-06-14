const { io } = require('socket.io-client');

const SERVER_URL = 'http://127.0.0.1:1337';
const socket = io(SERVER_URL);

//  wait until socket connects before adding event listeners
socket.on('connect', () => {
  socket.on('message:update', (data) => {
  });
});
