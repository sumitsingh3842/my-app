import { Avatar, Badge, Box, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { createStyles, makeStyles } from '@mui/styles';

type Conversation = {
    endUserId: number;
    avatar: string | React.ReactNode; // Either a URL to an image or a React Node for icons
    name: string;
    timestamp: string;
    lastMessage: string;
    unreadCount?: number;
  };
  const useStyles = makeStyles(() => ({
    hoverBox: {
      '&:hover': {
        backgroundColor: '#202c33', // slightly lighter than the non-hover state
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // subtle shadow on hover
        cursor: 'pointer', // pointer cursor on hover
      },
    },
  }));
const ConversationItem: React.FC<{ conversation: Conversation,setCurrentConversation: React.Dispatch<React.SetStateAction<Conversation | null>> }> = ({ conversation,setCurrentConversation }) => {
  const classes = useStyles();
    return (
      <Box 
      display="flex" 
      alignItems="center" 
      padding="12px 16px" 
      bgcolor={conversation.unreadCount ? "#202c33" : "#0c1317"} 
      borderRadius="8px" 
      marginBottom="8px" 
      className={classes.hoverBox} 
      onClick={() => setCurrentConversation(conversation)}
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
