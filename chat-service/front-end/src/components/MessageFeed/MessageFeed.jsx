import cn from "classnames";
import s from "./MessageFeed.module.scss";

const MessageFeed = ({ messages }) => {
  return(
    <section className={s.container}>
      <ul className={s.messages}>
        {messages.map((message, index) => {
            return <li key={index} className={cn(s.message, {
              [s.server]: message.from === 'server',
              [s.client]: message.from === 'client'
            })}>{message.message}</li>;
          })}
      </ul>
    </section>
  )
};

export default MessageFeed;
