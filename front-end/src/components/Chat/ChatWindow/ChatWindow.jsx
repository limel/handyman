import { useEffect, useState, useRef } from 'react';
import { io } from 'socket.io-client';
import cn from 'classnames';
import s from '~/components/Chat/Chat.module.scss';

const ChatWindow = ({ open, closeHandler }) => {
  const [ message, setMessage ] = useState();
  const [ messages, setMessages ] = useState([
    { from: 'server', message: 'Hey ! I\'m Acumen Handyman. What can I help you with today ?' },
  ]);
  const [ socket, setSocket ] = useState(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const newSocket = io('http://127.0.0.1:5050', {
      transports: [ 'websocket' ],
    });

    newSocket.on('connect', () => {
    });

    newSocket.on('message/client-recieved', (incomingMessage) => {
      setMessages((prev) => [ ...prev, incomingMessage ]);
    });

    setSocket(newSocket);

    return () => {
      newSocket.off('message/client-recieved');
      newSocket.disconnect();
    };
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [ messages ]);

  const sendMessage = () => {
    if (message.trim() !== '') {
      setMessages((prev) => [ ...prev, { from: 'client', message } ]);
      socket.emit('message/client-send', { id: socket.id, message, from: 'client' });
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handlerClose = () => {
    closeHandler();
    if (socket) {
      socket.disconnect();
    }
  };

  return (
    open && (
      <div className={ s.chat }>
        <div className={ s.header }>
          <p>ACUMEN HANDYMEN</p>
          <button
            className={ s.close }
            aria-label="close"
            onClick={ handlerClose }
            type="button"
          />
        </div>
        <div className={ s.body }>
          <ul className={ s['msg-block'] }>
            {messages.map((msg, index) => (
              <li
                className={ cn({
                  [s.server]: msg.from === 'server',
                  [s.client]: msg.from === 'client',
                }) }
                key={ index }
              >
                {msg.message}
              </li>
            )) }
            <p className={ s['msg-help-info'] }>Press Enter to send a message</p>
            <div ref={ messagesEndRef } />
          </ul>
        </div>
        <div className={ s.footer }>
          <form onSubmit={ (e) => { e.preventDefault(); sendMessage(); } } className={ s.form }>
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
            <button type="submit" className={ s.button } onClick={ (e) => { e.preventDefault(); sendMessage(); } }>
              <svg><use href="/sprite.svg#send" /></svg>
            </button>
          </form>
        </div>
      </div>
    )
  );
};

export default ChatWindow;
