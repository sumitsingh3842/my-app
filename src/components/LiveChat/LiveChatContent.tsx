import { Box } from '@mui/material'
import React from 'react'
import ChatContent from './ChatContent'
import ChatHeader from './ChatHeader'
import ChatTypeBar from './TypeBar'
type Conversation = {
  id: number;
  avatar: string | React.ReactNode; // Either a URL to an image or a React Node for icons
  name: string;
  timestamp: string;
  lastMessage: string;
  unreadCount?: number;
};
function LiveChatContent({conversation}: {conversation: Conversation|null}) {
  return (
    <Box display="flex" flexDirection="column" sx={{width:'80%'}}>
      <ChatHeader conversation={conversation}/>
      <ChatContent />
      <ChatTypeBar />
    </Box>
  )
}

export default LiveChatContent