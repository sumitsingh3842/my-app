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
  return (
    <Box display="flex" flexDirection="column" sx={{width:'80%'}}>
      <ChatHeader conversation={conversation}/>
      <ChatContent conversations={conversations}  />
      <ChatTypeBar conversations={conversations} setConversations={setConversations} />
    </Box>
  )
}

export default LiveChatContent