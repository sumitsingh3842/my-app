import React from 'react';
import ConversationItem from './ConversationItem';
import { Box } from '@mui/material';
import { Conversation } from './types';
function LiveChatList({ conversations }: { conversations: Conversation[]}) {

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
            key={conversation.endUserId}
            conversation={conversation}
          />
        ))
      }
    </Box>
  );
}

export default LiveChatList;
