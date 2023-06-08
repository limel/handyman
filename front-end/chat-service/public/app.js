const socket = io('/');

socket.on('connect', () => {
  console.log('Connected to admin panel');
});

socket.on('message/receive', (message) => {
  console.log('Received message:', message);
  // Update the message feed in the HTML
  const messageFeed = document.getElementById('message-feed');
  const listItem = document.createElement('li');
  listItem.textContent = message;
  messageFeed.appendChild(listItem);
});

const messageEditor = document.getElementById('message-editor');

// Example usage: Send a message to the server
messageEditor.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = event.target.elements.message;
  const message = input.value;
  socket.emit('message/send', message);
  input.value = '';
});
