import { Avatar, Badge, Box, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { createStyles, makeStyles } from '@mui/styles';
import { getChatContent } from '../../axios-client/get-chat-content';
import { usePromiseTracker, trackPromise } from 'react-promise-tracker';
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
  interface GetChatContentResponse {
    isError: boolean;
    data?: ConversationContent[];
  }
  const useStyles = makeStyles(() => ({
    hoverBox: {
      '&:hover': {
        backgroundColor: '#202c33', // slightly lighter than the non-hover state
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // subtle shadow on hover
        cursor: 'pointer', // pointer cursor on hover
      },
    },
  }));
const ConversationItem: React.FC<{ conversation: Conversation,setCurrentConversation: React.Dispatch<React.SetStateAction<ConversationContent[] | null>> }> = ({ conversation,setCurrentConversation }) => {
  const classes = useStyles();
  const fetchChatContent = async (conversation:Conversation) => {
    try {
      const { endUserId } = conversation;
      const getChatContentResp = await trackPromise(getChatContent(endUserId)) as GetChatContentResponse;
  if (getChatContentResp.isError || !getChatContentResp.data) {
    console.log("Error in fetching chat content");
    return;
  }
  setCurrentConversation(getChatContentResp.data);
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
      onClick={() => fetchChatContent(conversation)}
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
