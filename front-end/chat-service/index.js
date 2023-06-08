const express = require('express');
const WebSocket = require('ws');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());

const server = require('http').createServer(app);

app.use(express.static(path.resolve(__dirname, 'public')));
const wss = new WebSocket.Server({ server });

// WebSocket connection event
wss.on('connection', (ws) => {
  console.log('A new client connected');

  // WebSocket message event
  ws.on('message', (message) => {
    console.log('Received message:', message);

    // Echo the message back to the client
    ws.send(`You sent: ${ message }`);
  });
});

// Express route for serving HTML file
app.get('/', (req, res) => {
  res.sendFile(`${ __dirname }/index.html`);
});

// Start the server
server.listen(5050, () => {
  console.log('Server started on port 5050');
});
