import React from 'react';
import { Button, Typography, Paper, Avatar, Container, Box, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import '../../styles/components/ChatBotBuilder/ChatBotPreview.css'
interface Message {
  sender: 'user' | 'bot';
  content: string;
}
interface ChatBotPreviewProps {
  messages: Message[];
  message:string;
}
function ChatBotPreview({ messages,message }: ChatBotPreviewProps) {
  return (
    <Container maxWidth="xs" style={{ marginTop: '20px' }} className='chatBotPreviewDiv'>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Box display="flex" alignItems="center" marginBottom="20px">
          <IconButton>
            <ArrowBackIcon />
          </IconButton>
          <Avatar style={{ backgroundColor: '#FFC107', marginRight: '10px' }}>😊</Avatar>
          <Typography variant="h6">Ellen</Typography>
          <Typography variant="body2" color="primary" style={{ marginLeft: '10px' }}>
            Online
          </Typography>
        </Box>
        <Box sx={{height:'300px',overflowY:'auto'}}>
        {messages.map((message, index) => (
          <Box
            key={index}
            bgcolor={message.sender === 'user' ? '#E3F2FD' : '#FFC107'}
            padding="10px"
            borderRadius="10px"
            marginBottom="20px"
            sx={{width:'fit-content'}}
          >
            <Typography variant="body1">{message.content}</Typography>
          </Box>
        ))}
        {
          message !== '' &&(
            <Box
            sx={{width:'fit-content'}}
            bgcolor= '#E3F2FD'
            padding="10px"
            borderRadius="10px"
            marginBottom="20px"
          >
            <Typography variant="body1">{message}</Typography>
          </Box>
          )
          
        }
        
        </Box>
        

        <Button variant="contained" color="primary" fullWidth>
          Test Ellen
        </Button>
      </Paper>
    </Container>
  );
}

export default ChatBotPreview;