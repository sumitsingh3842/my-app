import React, { useState } from 'react';
import ChatBotSearchBar from './ChatBotSearchBar';
import ChatBotPreview from './ChatBotPreview';
import ChatBotConfig from './ChatBotConfig';
import '../../styles/components/ChatBotBuilder/ChatBotMain.css'
interface Message {
  sender: 'user' | 'bot';
  content: string;
}

function ChatBotMain() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState('');
  const handleSend = (message:string,sender:'user'|'bot') => {
    if (message.trim() === '') return;

    setMessages([...messages, { sender, content: message }]);
  };

  return (
    <div className='chatBotMainDiv'>
      <ChatBotSearchBar />
      <ChatBotConfig handleSend={handleSend} setMessage={setMessage} message={message} messages={messages}/>
      <ChatBotPreview  messages={messages} message={message}/>
    </div>
  );
}

export default ChatBotMain;