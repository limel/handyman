import { useRef, useEffect } from "react";
import s from "./ChatUI.module.scss";

const ChatUI = ({activeChatId, socket}) => {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = inputRef.current.value;
    if(activeChatId) {
      socket.emit("message/server-send", {message, id: activeChatId, from: 'server'});
      inputRef.current.value = "";
    }
  };

  const handleKeyPress = (e) => { 
    if(e.key === "Enter") {
      handleSubmit(e);
    }
  };

  useEffect(() => {
    document.addEventListener("keypress", handleKeyPress);
    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, [activeChatId]);

  return (
    <form className={s.container} onSubmit={(e)=> handleSubmit(e)} >
      <textarea rows="5" className={s.input} ref={inputRef} placeholder="message for client"/>
      <button type="submit" className={s.button} >
        Send
      </button>
    </form>
  );
};

export default ChatUI;
