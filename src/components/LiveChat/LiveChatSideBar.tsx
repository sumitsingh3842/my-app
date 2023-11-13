import React,{useState} from 'react'
import SearchBar from './SearchBar'
import '../../styles/components/LiveChat/LiveChatSideBar.css'
import { Divider } from '@mui/material'
import LiveChatList from './LiveChatList'
type Conversation = {
    endUserId: string;
    avatar: string | React.ReactNode; // Either a URL to an image or a React Node for icons
    name: string;
    timestamp: string;
    lastMessage: string;
    unreadCount?: number;
  };
  type ConversationContent = {
    endUserId: string;
    source: string;
    integrationId: string;
    message: string;
    createdEpoch: number;
    unread:string;
  
  };
  interface LiveChatSideBarProps {
    conversations: Conversation[]
    setCurrentConversation: React.Dispatch<React.SetStateAction<ConversationContent[] | null>>
  }
function LiveChatSideBar({conversations,setCurrentConversation}: LiveChatSideBarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const filteredConversations = conversations.filter(conversation =>
    conversation.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
    
  return (
    <div style={{ backgroundColor: '#333', padding: '20px',width:'40%',height:'100%' }}>
    <SearchBar value={searchQuery} onChange={setSearchQuery} />
    <Divider sx={{ marginBottom: 2 }} />
    <LiveChatList conversations={filteredConversations} setCurrentConversation={setCurrentConversation} />
  </div>
  )
}

export default LiveChatSideBar