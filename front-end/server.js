const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const { Server } = require('socket.io');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });

  const io = new Server(server, {
    /* WebSocket options here */
  });

  // Handle WebSocket connections
  io.on('connection', (socket) => {
    console.log('New WebSocket connection');

    // Handle incoming WebSocket messages
    socket.on('message', (message) => {
      console.log('Received message:', message);

      // Send a response back to the client
      socket.send(`Response from server: ${ message }`);
    });

    // Handle WebSocket disconnection
    socket.on('disconnect', () => {
      console.log('WebSocket connection closed');
    });
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
