import React from 'react'
import ConversationItem from './ConversationItem'
import { Box } from '@mui/material';
interface LiveChatListProps {
    conversations: Conversation[],
    setCurrentConversation: React.Dispatch<React.SetStateAction<ConversationContent[] | null>>
    }
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
function LiveChatList({ conversations,setCurrentConversation}:LiveChatListProps) {
  return (
    <Box 
      bgcolor="#333" 
      padding="0px" 
      sx={{
        overflowY: 'scroll',
        maxHeight: '76vh',
        '&::-webkit-scrollbar': {
          width: '4px'
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(255,255,255,0.2)',
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: 'transparent',
        }
      }}
    >
      {
  conversations.map(conversation => (
    <ConversationItem
      key={conversation.endUserId.toString()} // Ensuring key is a string as React prefers
      conversation={conversation}
      setCurrentConversation={setCurrentConversation}
    />
  ))
}
    </Box>
  );
}

export default LiveChatList