import Image from 'next/image';
import s from './Chat.module.scss';

const Chat = () => (
  <div className={ s.chatBlock }>
    <p className={ s.text }>Have more questions?<br/>Don't hesitate to ask!</p>
    <Image className={ s.icon } src="/images/chat-icon.png" alt="Chat" width={ 85 } height={ 85 } />
  </div>
);

export default Chat;
