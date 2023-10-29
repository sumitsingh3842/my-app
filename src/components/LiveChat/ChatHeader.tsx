import React, { useState } from 'react';
import { Box, Avatar, Typography, IconButton, InputBase } from '@mui/material';
import { keyframes } from '@mui/system';
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
interface ChatHeaderProps {
  conversation:Conversation|null,
  onSearchChange:React.Dispatch<React.SetStateAction<string>>
}
const slideIn = keyframes`
  from {
    width: 0px;
  }
  to {
    width: 200px;  // or your desired width
  }
`;

const slideOut = keyframes`
  from {
    width: 200px;  // or your desired width
  }
  to {
    width: 0px;
  }
`;
const ChatHeader= ({ conversation,onSearchChange }:ChatHeaderProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Box display="flex" alignItems="center" padding="16px" bgcolor="#20232a" borderBottom="1px solid #333">
      <Avatar src="path_to_business_logo" />
      <Typography variant="h6" marginLeft="12px" color="white" mr={2}>
        {conversation?.name}
      </Typography>
      <Box flexGrow={1}></Box>

      {expanded ? (
        <InputBase
          placeholder="Search..."
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            onSearchChange(e.target.value);
          }}
          sx={{
            color: '#fff',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            padding: '6px 12px',
            borderRadius: '15px',
            marginRight: '8px',
            width: expanded ? '200px' : '0px', // or your desired width when expanded
            overflow: 'hidden',
            transition: 'width 0.3s',
            animation: `${expanded ? slideIn : slideOut} 0.3s`
          }}
        />
      ) : null}

      <IconButton color="inherit" onClick={() => setExpanded(!expanded)}>
        <SearchIcon />
      </IconButton>
      <IconButton color="inherit">
        <MoreVertIcon />
      </IconButton>
    </Box>
  );
};

export default ChatHeader;
