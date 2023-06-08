import Image from 'next/image';
import { useState } from 'react';
import ChatWindow from '~/components/Chat/ChatWindow';
// import { io } from 'socket.io-client';
// import SocketIOClient from 'socket.io-client';
import s from './Chat.module.scss';

// let socket;
const Chat = () => {
  const [ socketWrapper, setSocketWrapper ] = useState(false);

  const a = 'a';

  return (
    <div className={ s.chatBlock }>
      <p className={ s.text }>
        Have more questions?
        <br />
        Don&apos;t hesitate to ask!
      </p>
      <Image className={ s.icon } src="/images/chat-icon.png" alt="Chat" width={ 85 } height={ 85 } onClick={ () => { setSocketWrapper(true); } } />

      {socketWrapper && <ChatWindow /> }
    </div>
  );
};

export default Chat;
