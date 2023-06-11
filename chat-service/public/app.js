const socket = io('/admin');


let activeChatId = null;

function setActiveChatId(chatId) {
  activeChatId = chatId;
  // Update the UI or perform any other logic based on the selected chat ID
}

socket.on('connect', () => {
  console.log('Connected to admin panel');
});

socket.on('chats', (chats) => {
  console.log('chats', chats);
  const usersList = document.getElementById('users-list');
  usersList.innerHTML = '';
  chats.forEach((chat) => {
    const listItem = document.createElement('li');
    listItem.textContent = chat.chat_name;
    listItem.addEventListener('click', () => {
      setActiveChatId(chat.socketId);
    });
    usersList.appendChild(listItem);
  });
});

socket.on('message/server-recieved', (data) => {
  console.log('it catch server-recievd', data);
  
});

const messageEditor = document.getElementById('message-editor');

// Example usage: Send a message to the server
messageEditor.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = event.target.elements.message;
  const message = input.value;
  const chatId = activeChatId;
  const messageFeed = document.getElementById('message-feed');
  const listItem = document.createElement('li');
  listItem.textContent = message;
  messageFeed.appendChild(listItem);

  if (chatId) {
    socket.emit('message/server-send', { message, chatId });
    input.value = '';
  }
});
