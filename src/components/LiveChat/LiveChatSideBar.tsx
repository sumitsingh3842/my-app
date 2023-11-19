import React, { useState } from 'react';
import SearchBar from './SearchBar';
import '../../styles/components/LiveChat/LiveChatSideBar.css';
import { Divider } from '@mui/material';
import LiveChatList from './LiveChatList';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store'; // Adjust the import path as needed
import { Conversation } from './types'; // Adjust the import path as needed
function LiveChatSideBar({ conversations }: { conversations: Conversation[]}) {
  const [searchQuery, setSearchQuery] = useState('');

  
  const filteredConversations = conversations.filter(conversation =>
    conversation.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ backgroundColor: '#333', padding: '20px', width: '40%', height: '100%' }}>
      <SearchBar value={searchQuery} onChange={setSearchQuery} />
      <Divider sx={{ marginBottom: 2 }} />
      <LiveChatList conversations={filteredConversations}/>
    </div>
  );
}

export default LiveChatSideBar;
