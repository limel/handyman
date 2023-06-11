import cn from "classnames";
import s from "./MessageFeed.module.scss";

const MessageFeed = ({ messages }) => {
  console.log(messages);
  return(
    <section className={s.container}>
      <ul className={s.messages}>
        {messages.map((message, index) => {
            return <li key={index} className={cn(s.message, {
              [s.client]: message.from = 'client',
              [s.server]: message.from = 'server'
            })}>{message.message}</li>;
          })}
      </ul>
    </section>
  )
};

export default MessageFeed;
