import React, { useState } from 'react';
import SearchBar from './SearchBar';
import '../../styles/components/LiveChat/LiveChatSideBar.css';
import { Divider } from '@mui/material';
import LiveChatList from './LiveChatList';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store'; // Adjust the import path as needed
import { setSelectedConversation } from '../../features/LiveChat/liveChatSlice'; // Adjust import path
type Conversation = {
  endUserId: string;
  avatar: string;
  name: string;
}
function LiveChatSideBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();

  const conversations = useSelector((state: RootState) => state.liveChat.conversations);
  
  const filteredConversations = conversations.filter(conversation =>
    conversation.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSetCurrentConversation = (conversation: Conversation) => {
    // Assuming the setSelectedConversation action expects a conversation object
    dispatch(setSelectedConversation(conversation));
  };

  return (
    <div style={{ backgroundColor: '#333', padding: '20px', width: '40%', height: '100%' }}>
      <SearchBar value={searchQuery} onChange={setSearchQuery} />
      <Divider sx={{ marginBottom: 2 }} />
      <LiveChatList conversations={filteredConversations}/>
    </div>
  );
}

export default LiveChatSideBar;
