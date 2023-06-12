import { useRef } from "react";
import cn from "classnames";
import s from "./MessageFeed.module.scss";

const MessageFeed = ({ messages }) => {
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    setTimeout(() => {messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })}, 100);
  };
  return(
    <section className={s.container}>
      <ul className={s.messages}>
        {messages.map((message, index) => {
          scrollToBottom();
            return <li key={index} className={cn(s.message, {
              [s.server]: message.from === 'server',
              [s.client]: message.from === 'client'
            })}>{message.message}</li>;
          })}
          <div ref={ messagesEndRef } />
      </ul>
    </section>
  )
};

export default MessageFeed;
