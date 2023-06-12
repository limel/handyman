import Image from 'next/image';
import { useState } from 'react';
import ChatWindow from './ChatWindow';

import s from './Chat.module.scss';

const Chat = () => {
  const [ open, setOpen ] = useState(false);

  const openHandler = () => {
    setOpen(true);
  };

  const closeHandler = () => {
    setOpen(false);
  };

  const imgSrc = open ? '/images/chat-icon.gif' : '/images/chat-icon.png';

  return (
    <div className={ s.chatBlock }>
      <p className={ s.text }>
        Have more questions?
        <br />
        Don&apos;t hesitate to ask!
      </p>
      <Image className={ s.icon } src={ imgSrc } alt="Chat" width={ 85 } height={ 85 } onClick={ openHandler } />
      {open && <ChatWindow open={ open } closeHandler={ closeHandler } />}
    </div>
  );
};

export default Chat;
