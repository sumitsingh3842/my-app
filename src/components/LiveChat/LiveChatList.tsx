import React from 'react'
import ConversationItem from './ConversationItem'
import { Box } from '@mui/material';
interface LiveChatListProps {
    conversations: Conversation[],
    setCurrentConversation: React.Dispatch<React.SetStateAction<Conversation | null>>
    }
    type Conversation = {
        id: number;
        avatar: string | React.ReactNode; // Either a URL to an image or a React Node for icons
        name: string;
        timestamp: string;
        lastMessage: string;
        unreadCount?: number;
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
      {conversations.map(conversation => (
        <ConversationItem key={conversation.id} conversation={conversation} setCurrentConversation={setCurrentConversation}/>
      ))}
    </Box>
  );
}

export default LiveChatList