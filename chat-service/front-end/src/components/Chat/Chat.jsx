import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import ChatList from "../ChatList";
import MessageFeed from "../MessageFeed";
import ChatUI from "../ChatUI";

const LOCAL_STORAGE_KEY = "chatsList";

const Chat = () => {
  const [socket, setSocket] = useState(null);
  const [chatsList, setChatsList] = useState([]);
  const [activeChat, setActiveChat] = useState(null);
  const [activeChatId, setActiveChatId] = useState(null);

  useEffect(() => {
    const storedChats = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedChats) {
      setChatsList(storedChats);
    }

    const newSocket = io("ws://127.0.0.1:5050/admin");

    newSocket.on("connect", () => {
    });

    newSocket.on("chats", (chats) => {
      setChatsList(chats);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(chats));
    });

    setSocket(newSocket);
    return () => {
      newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    setActiveChat(chatsList.find((chat) => chat.id === activeChatId));
  }, [activeChatId, chatsList]);

  useEffect(() => {
    if (chatsList.length === 0) {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    } else {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(chatsList));
    }
  }, [chatsList]);
  return (
    <>
      <ChatList chatList={chatsList} activeChatId={activeChatId} setActiveChatId={setActiveChatId} />
      <div className="chat-block">
        {activeChat && <MessageFeed messages={activeChat?.messages} />}
        <ChatUI activeChatId={activeChatId} socket={socket} />
      </div>
    </>
  )
}

export default Chat;