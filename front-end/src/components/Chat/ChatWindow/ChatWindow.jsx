import { useEffect, useState } from 'react';
import WebSocket from 'isomorphic-ws';

export default function Home() {
  let socket;
  // const [ socket, setSocket ] = useState(null);
  useEffect(() => {
    // setSocket(new WebSocket('ws://127.0.0.1:5050'));
    socket = new WebSocket('ws://127.0.0.1:5050');

    socket.onopen = () => {
      console.log('WebSocket connection established');
    };

    socket.onmessage = (event) => {
      console.log('Received message:', event.data);
    };

    return () => {
      socket.close();
    };
  }, []);

  const sendMessage = () => {
    const message = document.getElementById('messageInput').value;
    socket.send(message);
  };

  return (
    <div>
      <h1>WebSocket Example</h1>
      <input type="text" id="messageInput" placeholder="Type a message" />
      <button onClick={ sendMessage }>Send</button>
    </div>
  );
}
