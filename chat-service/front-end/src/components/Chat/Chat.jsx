import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import ChatList from "../ChatList";
import MessageFeed from "../MessageFeed";
import ChatUI from "../ChatUI";

const Chat = () => {
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
    
    setSocket(newSocket);
    return () => newSocket.disconnect();
  }, []);

  useEffect(() => {
    setActiveChat(chatsList.find((chat) => chat.id === activeChatId));
  }, [activeChatId, chatsList]);
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