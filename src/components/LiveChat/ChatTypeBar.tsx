import React, { useState } from 'react';
import { Box, Input, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import AddIcon from '@mui/icons-material/Add';

type SourceType = 'user' | 'agent';
type conversationContent = {
  source: SourceType;
  content: string;
};

interface ChatTypeBarProps {
  conversations: conversationContent[];
  setConversations: React.Dispatch<React.SetStateAction<conversationContent[]>>;
}

const ChatTypeBar = ({conversations, setConversations}: ChatTypeBarProps) => {
    const [message, setMessage] = useState('');

    const handleSend = () => {
        if (message.trim() !== '') {
            setConversations([...conversations, { source: 'user', content: message }]);
            setMessage('');  // Clear the input after sending
        }
    };

    return (
      <Box display="flex" alignItems="center" padding="12px" bgcolor="#0c1317" borderTop="1px solid #444">
          <IconButton color="inherit"><AddIcon /></IconButton>
          <Input 
              fullWidth 
              placeholder="Type a message" 
              sx={{ color: "white", bgcolor: "#404040", borderRadius: "24px", padding: "8px 12px" }}
              value={message}
              onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setMessage(e.target.value)}
              onKeyPress={(e: { key: string; shiftKey: any; preventDefault: () => void; }) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSend();
                  }
              }}
              disableUnderline={true}
          />
          <IconButton color="inherit" onClick={handleSend}><SendIcon /></IconButton>
      </Box>
    );
};

export default ChatTypeBar;
