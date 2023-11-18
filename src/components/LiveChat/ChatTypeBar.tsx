import React, { useState, useEffect } from 'react';
import { Box, Input, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import AddIcon from '@mui/icons-material/Add';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store'; // Adjust the import path as needed
import { addConversationContent } from '../../features/LiveChat/liveChatSlice'; // Adjust import paths
import { ConversationContent } from './types'; // Adjust the import path
interface ChatTypeBarProps {
    sendMessage: (message: ConversationContent) => void;
    }
const ChatTypeBar = ({sendMessage}:ChatTypeBarProps) => {
  const [message, setMessage] = useState<string>('');
  const dispatch = useDispatch();
  const currentConversation = useSelector((state: RootState) => state.liveChat.selectedConversationContent);
  const [endUserId, setEndUserId] = useState<string>('');

  useEffect(() => {
    if (currentConversation && currentConversation.length > 0) {
      setEndUserId(currentConversation[0].endUserId);
    }
  }, [currentConversation]);

  const handleSend = () => {
    if (message.trim() !== '') {
      const newMessage: ConversationContent = {
        endUserId: endUserId,
        source: 'agent',
        integrationId: '123', // Replace with actual integration ID
        message: message,
        createdEpoch: Date.now(),
        unread: 'false'
      };

      sendMessage(newMessage);
      dispatch(addConversationContent(newMessage));
      setMessage('');
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
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => {
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
