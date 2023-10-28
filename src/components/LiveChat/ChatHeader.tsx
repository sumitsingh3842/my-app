import { Box, Typography, Avatar, Badge, IconButton } from '@mui/material';
import VideocamIcon from '@mui/icons-material/Videocam';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
type Conversation = {
  id: number;
  avatar: string | React.ReactNode; // Either a URL to an image or a React Node for icons
  name: string;
  timestamp: string;
  lastMessage: string;
  unreadCount?: number;
};

const ChatHeader = ({conversation}: {conversation: Conversation|null}) => {
  return (
    <Box display="flex" alignItems="center" padding="16px" bgcolor="#20232a" borderBottom="1px solid #333">
      <Avatar src="path_to_business_logo" />
      <Typography variant="h6" marginLeft="12px" color="white" mr={2}>
      {conversation?.name}
      </Typography>
      <Box flexGrow={1}></Box>
      <IconButton color="inherit"><VideocamIcon /></IconButton>
      <IconButton color="inherit"><SearchIcon /></IconButton>
      <IconButton color="inherit"><MoreVertIcon /></IconButton>
    </Box>
  );
};
export default ChatHeader;