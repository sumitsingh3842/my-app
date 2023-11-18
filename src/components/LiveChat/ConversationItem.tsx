import React from 'react';
import { Avatar, Badge, Box, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { createStyles, makeStyles } from '@mui/styles';
import { useDispatch } from 'react-redux';
import { setSelectedConversation,setSelectedConversationContent } from '../../features/LiveChat/liveChatSlice'; // Adjust import path
import { getChatContent } from '../../axios-client/get-chat-content';
import { trackPromise } from 'react-promise-tracker';
import { Conversation, ConversationContent } from './types';
interface GetChatContentResponse {
  isError: boolean;
  data?: ConversationContent[];
}
const useStyles = makeStyles(() =>
  createStyles({
    hoverBox: {
      '&:hover': {
        backgroundColor: '#202c33',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer',
      },
    },
  }),
);

const ConversationItem: React.FC<{ conversation: Conversation }> = ({ conversation }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const fetchChatContent = async () => {
    try {
      const getChatContentResp = await trackPromise(getChatContent(conversation.endUserId)) as GetChatContentResponse;
      if (getChatContentResp.isError || !getChatContentResp.data) {
        console.log("Error in fetching chat content");
        return;
      }
      dispatch(setSelectedConversation(conversation));
      dispatch(setSelectedConversationContent(getChatContentResp.data));
    } catch (error) {
      console.error('Failed to fetch conversations:', error);
    }
  };
    return (
      <Box 
      display="flex" 
      alignItems="center" 
      padding="12px 16px" 
      bgcolor={conversation.unreadCount ? "#202c33" : "#0c1317"} 
      borderRadius="8px" 
      marginBottom="8px" 
      className={classes.hoverBox} 
      onClick={() => fetchChatContent()}
    >
          <Badge badgeContent={conversation.unreadCount} color="error" max={999} overlap="circular" anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
            <Avatar src={typeof conversation.avatar === 'string' ? conversation.avatar : undefined} sx={{ width: 50, height: 50 }}>
              {typeof conversation.avatar !== 'string' && conversation.avatar}
            </Avatar>
          </Badge>
          <Box flexGrow={1} marginLeft="12px">
            <Typography variant="h6" color="white">{conversation.name}</Typography>
            <Box display="flex" alignItems="center">
              <CheckIcon fontSize="small" color="inherit" />
              <Typography variant="body2" color="grey" marginLeft="4px" overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">
                {conversation.lastMessage}
              </Typography>
            </Box>
          </Box>
          <Typography variant="caption" color="grey">{conversation.timestamp}</Typography>
        </Box>
      );
};
export default ConversationItem;
