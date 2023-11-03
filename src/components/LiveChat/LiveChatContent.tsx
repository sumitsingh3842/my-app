import { Box } from '@mui/material'
import React from 'react'
import ChatContent from './ChatContent'
import ChatHeader from './ChatHeader'
import ChatTypeBar from './ChatTypeBar'
type Conversation = {
  id: number;
  avatar: string | React.ReactNode; // Either a URL to an image or a React Node for icons
  name: string;
  timestamp: string;
  lastMessage: string;
  unreadCount?: number;
};
type SourceType = 'user' | 'agent';
type conversationContent = {
  source:SourceType,
  content:string
}
function LiveChatContent({conversation}: {conversation: Conversation|null}) {
  const [conversations, setConversations] = React.useState<conversationContent[]>([]);
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  const [filteredConversations, setFilteredConversations] = React.useState<conversationContent[]>(conversations);

  React.useEffect(() => {
    if (searchQuery) {
      const loweredSearchQuery = searchQuery.toLowerCase();
      const filtered = conversations.filter(convo => convo.content.toLowerCase().includes(loweredSearchQuery));
      setFilteredConversations(filtered);
    } else {
      setFilteredConversations(conversations);
    }
  }, [conversations, searchQuery]);
  
  return (
    <Box display="flex" flexDirection="column" sx={{width:'80%',backgroundColor:'#20232a',height:'91vh'}}>
      {conversation && (
        <>
          <ChatHeader conversation={conversation} onSearchChange={setSearchQuery} />
          <ChatContent conversations={filteredConversations} />
          <ChatTypeBar conversations={conversations} setConversations={setConversations} />
        </>
      )}
    </Box>
  );
}

export default LiveChatContent