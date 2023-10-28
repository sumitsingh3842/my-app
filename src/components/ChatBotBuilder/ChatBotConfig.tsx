import React, { useState } from 'react';
import { 
  Typography, TextField, Button, IconButton, Paper, 
  InputAdornment, Divider, Grid, Menu, MenuItem
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface ChatBotConfigProps {
  handleSend: (message:string,sender:'user'|'bot') => void;
  setMessage: (message:string) => void;
  message:string;
  messages: { sender: 'user' | 'bot'; content: string; }[];
}
const ChatBotConfig = ({handleSend,setMessage,message,messages}:ChatBotConfigProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const createMessage = (message:string) => {
    if (message.trim() === '') return;
    setMessage(message);
  }
  const confirmMessage = () => {
    handleSend(message,'bot');
    setMessage('');
  }

  return (
    <Paper sx={{ padding: 3, elevation: 3,width:'80%',borderRadius:'0' }}>
      <Typography variant="h5">Default Welcome Intent</Typography>
      <Divider sx={{ marginY: 2 }} />
      <Typography variant="h6">Enter Welcome message</Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Bot's Message"
            value={message}
            onChange={(e) => createMessage(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => confirmMessage()}>
                    <SendIcon />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <Button variant="outlined">+ Text</Button>
          <Button variant="outlined" sx={{ marginLeft: 1 }}>+ Buttons</Button>
          <Button variant="outlined" sx={{ marginLeft: 1 }} onClick={handleOpenMenu}>
            + More <ExpandMoreIcon />
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
          >
            <MenuItem onClick={handleCloseMenu}>Option 1</MenuItem>
            <MenuItem onClick={handleCloseMenu}>Option 2</MenuItem>
            <MenuItem onClick={handleCloseMenu}>Option 3</MenuItem>
          </Menu>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ChatBotConfig;
