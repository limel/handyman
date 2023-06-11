import { useEffect, useState, useRef } from 'react';
import { io } from 'socket.io-client';
import s from '~/components/Chat/Chat.module.scss';

export default function ChatWindow({ open, closeHandler }) {
  const [ message, setMessage ] = useState();
  const [ messages, setMessages ] = useState([
    { from: '', message: 'Hello there, Please ask your question.' },
  ]);
  const [ socket, setSocket ] = useState(null);
  const messagesEndRef = useRef(null);
  // let socket;

  useEffect(() => {
    const newSocket = io('http://195.12.56.85:5050', {
      transports: [ 'websocket' ],
    });

    newSocket.on('connect', () => {
      console.log('Connected to the server', newSocket.id);
    });

    newSocket.on('message/client-recieved', (msg) => {
      console.log('Message from server', msg);
      setMessages((prev) => [ ...prev, msg ]);
    });

    setSocket(newSocket);

    return () => {
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
      setMessages((prev) => [ ...prev, { from: 'client', msg: message } ]);
      socket.emit('message/client-send', { message });
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      sendMessage();
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
            onClick={ closeHandler }
            type="button"
          />
        </div>
        <div className={ s.body }>
          <ul className={ s['msg-block'] }>
            {messages.map((msg, index) => (!msg.from
              ? (
                <li className={ s['server-msg'] } key={ index }>
                  {/* {'Handyman: '}
                  {' '} */}
                  {msg.message}
                </li>
              ) : (
                <li className={ s['client-msg'] } key={ index }>
                  {/* {`${ msg.from }: `}
                  {' '} */}
                  {msg.msg}
                </li>
              )))}
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
}
