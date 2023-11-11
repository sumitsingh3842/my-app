import React, { useState } from 'react';
import { Box, Input, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import AddIcon from '@mui/icons-material/Add';

type ConversationContent = {
    endUserId: string;
    source: string;
    integrationId: string;
    message: string;
    createdEpoch: number;
    unread:string;
  
  };

interface ChatTypeBarProps {
  conversations: ConversationContent[];
  editConversation: React.Dispatch<React.SetStateAction<ConversationContent[] | null>>;
  onMessage: (message: MessageEvent) => void;
  sendMessage: (message: ConversationContent) => void;
}

const ChatTypeBar = ({conversations,editConversation,onMessage,sendMessage}: ChatTypeBarProps) => {
    const [message, setMessage] = useState('');
    const [endUserId, setEndUserId] = useState('');
    React.useEffect(() => {
        if (conversations) {
            const userId = conversations[0].endUserId;
            setEndUserId(userId);
        }
    }, [conversations]);

    const handleSend = () => {
        if (message.trim() !== '') {
            const newMessage: ConversationContent = {
                // Fill with appropriate data
                endUserId: endUserId,
                source: 'agent',
                integrationId: '123',
                message: message,
                createdEpoch: Date.now(),
                unread: 'false'
            };

            // Update conversations and call onMessage
            sendMessage(newMessage);
            editConversation(prevConversations => [...(prevConversations || []), newMessage]);
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
