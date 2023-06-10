const socket = io('/admin');


let activeChatId = null;

function setActiveChatId(chatId) {
  activeChatId = chatId;
  // Update the UI or perform any other logic based on the selected chat ID
}

socket.on('connect', () => {
  console.log('Connected to admin panel');
});

socket.on('users', (users) => {
  console.log('users', users);
  const usersList = document.getElementById('users-list');
  usersList.innerHTML = '';
  users.forEach((user) => {
    const listItem = document.createElement('li');
    listItem.textContent = user;
    listItem.addEventListener('click', () => {
      setActiveChatId(user);
    });
    usersList.appendChild(listItem);
  });
});

socket.on('message/server-recieved', (data) => {
  const message = data.message;
  console.log(message);
  // const currentChatId = document.getElementById('chat-id-input').value;
  // if (currentChatId === chatId) {
    // Update the message feed in the HTML
    const messageFeed = document.getElementById('message-feed');
    const listItem = document.createElement('li');
    listItem.textContent = message;
    messageFeed.appendChild(listItem);
  // }
});

const messageEditor = document.getElementById('message-editor');

// Example usage: Send a message to the server
messageEditor.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = event.target.elements.message;
  const message = input.value;
  const chatId = activeChatId;
  if (chatId) {
    socket.emit('message/server-send', { message, chatId });
    input.value = '';
  }
});
