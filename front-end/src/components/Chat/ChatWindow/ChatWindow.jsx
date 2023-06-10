import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import s from '~/components/Chat/Chat.module.scss';

export default function ChatWindow({ open, closeHandler }) {
  const [ message, setMessage ] = useState();
  const [ sendedMessage, setSendedMessage ] = useState([]);
  const [ receivedMessages, setReceivedMessages ] = useState([]);
  const [ socket, setSocket ] = useState(null);
  // let socket;

  useEffect(() => {
    const newSocket = io('http://127.0.0.1:5050', {
      transports: [ 'websocket' ],
    });

    newSocket.on('connect', () => {
      console.log('Connected to the server', newSocket.id);
    });

    newSocket.on('message/client-recieved', (msg) => {
      console.log('Message from server', msg);
      setReceivedMessages((prev) => [ ...prev, msg ]);
    });

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (message.trim() !== '') {
      setSendedMessage((prev) => [ ...prev, { message } ]);
      socket.emit('message/client-send', { message });
      setMessage('');
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
            {sendedMessage.map((messageData, index) => {
              console.log(messageData);
              return (
                <li key={ index } className={ s['client-msg'] }>
                  {messageData.message}
                </li>
              );
            })}
            {receivedMessages.map((messageData, index) => {
              console.log(messageData);
              return (
                <li key={ index } className={ s['server-msg'] }>
                  {messageData.message}
                </li>
              );
            })}
          </ul>
        </div>
        <div className={ s.footer }>
          <form onSubmit={ (e) => { e.preventDefault(); sendMessage(); } }>
            <textarea
              rows="3"
              type="text"
              value={ message }
              onChange={ (e) => setMessage(e.target.value) }
              className={ s['message-input'] }
              placeholder="Type your message here..."
              autoFocus
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    )
  );
}
