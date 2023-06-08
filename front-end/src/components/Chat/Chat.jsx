import Image from 'next/image';
import { useState } from 'react';
import io from 'socket.io-client';
import s from './Chat.module.scss';

let socket;
const Chat = () => {
  const [ open, setOpen ] = useState(false);
  const [ message, setMessage ] = useState('');

  const socketInit = async () => {
    await fetch('/api/socket');

    socket = io(window.location.host);

    socket.on('connect', () => {
      console.log('connected');
    });
  };

  const openHandler = () => {
    setOpen(true);
    socketInit();
  };

  const closeHandler = () => {
    setOpen(false);
  };

  const submitMessage = () => {
    const tremmedMessage = message.trim();
    if (tremmedMessage !== '') {
      console.log('Сообщение с инпута', tremmedMessage);
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      submitMessage();
    }
  };

  return (
    <div className={ s.chatBlock }>
      <p className={ s.text }>
        Have more questions?
        <br />
        Don't hesitate to ask!
      </p>
      <Image className={ s.icon } src="/images/chat-icon.png" alt="Chat" width={ 85 } height={ 85 } onClick={ openHandler } />
      {open
        ? (
          <div className={ s.chat }>
            <div className={ s.header }>
              <p>ACUMEN HANDYMEN</p>
              <div className={ s.close } onClick={ closeHandler } />
            </div>
            <div className={ s.body }>
              <ul className={ s['msg-block'] }>
                <li className={ s['server-msg'] }>Server message...</li>
                <li className={ s['client-msg'] }>Client message...</li>
              </ul>
            </div>
            <div className={ s.footer }>
              <form onSubmit={ (e) => { e.preventDefault(); submitMessage(); } }>
                <textarea
                  rows="3"
                  type="text"
                  value={ message }
                  onChange={ (e) => setMessage(e.target.value) }
                  className={ s['message-input'] }
                  placeholder="Type your message here..."
                  onKeyDown={ handleKeyPress }
                  autoFocus
                />
              </form>
            </div>
          </div>
        )
        : null}
    </div>
  );
};

export default Chat;
