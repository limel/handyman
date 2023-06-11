import "./App.css";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import ChatList from "./components/ChatList";
import MessageFeed from "./components/MessageFeed";
import ChatUI from "./components/ChatUI";


function App() {
  const [socket, setSocket] = useState(null);
  const [chatsList, setChatsList] = useState([]);
  const [activeChat, setActiveChat] = useState(null);
  const [activeChatId, setActiveChatId] = useState(null);

  useEffect(() => {
    const newSocket = io("ws://127.0.0.1:5050/admin");

    newSocket.on("connect", () => {
      console.log("Connected to admin panel");
    });

    newSocket.on("chats", (chats) => {
      setChatsList(chats);
    });

    newSocket.on("message/server-recieved", (chats) => {
      console.log("it catch server-recievd", chats);
      console.log(chats);
      setChatsList(chats);
    });

    setSocket(newSocket);
    return () => newSocket.disconnect();
  }, []);

  useEffect(() => {
    setActiveChat(chatsList.find((chat) => chat.socketId === activeChatId));
  }, [activeChatId, chatsList]);
  console.log('it chats', chatsList);

  return (
    <main className="app">
      <ChatList chatList={chatsList} activeChatId={activeChatId} setActiveChatId={setActiveChatId} />
      {activeChat && <MessageFeed messages={activeChat?.messages} />}
      <ChatUI activeChatId={activeChatId} socket={socket} />
    </main>
  );
}

export default App;
