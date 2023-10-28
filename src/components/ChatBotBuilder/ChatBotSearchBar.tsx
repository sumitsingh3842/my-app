import React, { useState } from 'react';
import { 
  AppBar, Toolbar, TextField, InputAdornment, IconButton, 
  List, ListItem, Paper, Divider, Collapse, Typography, Button 
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ChatIcon from '@mui/icons-material/ChatBubbleOutline';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

function ChatBotSearchBar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDropdown = (item: string) => {
    if (openDropdown === item) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(item);
    }
  };

  return (
    <Paper sx={{ padding: 3}}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Toolbar>
      </AppBar>

      <Divider sx={{ marginBottom: 2 }} />

      <List>
        {[
          { title: "Welcome Message", icon: <ChatIcon /> },
          { title: "Answer", icon: <QuestionAnswerIcon /> },
          { title: "Small Talk", icon: <ChatBubbleIcon /> },
          { title: "Unknown User Input", icon: <HelpOutlineIcon /> }
        ].map(item => (
          <div key={item.title}>
            <ListItem button onClick={() => handleDropdown(item.title)}>
              {item.icon}
              <Typography variant="body1" sx={{ marginLeft: 2 }}>
                {item.title}
              </Typography>
              {openDropdown === item.title ? <ExpandLessIcon sx={{ marginLeft: 'auto' }} /> : <ExpandMoreIcon sx={{ marginLeft: 'auto' }} />}
            </ListItem>
            <Collapse in={openDropdown === item.title} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
              <ListItem>
                <Button variant="outlined" color="primary" size="small" sx={{ marginRight: 'auto' }}>
                  + Add
                </Button>
                </ListItem>
              </List>
            </Collapse>
          </div>
        ))}
      </List>
    </Paper>
  );
}

export default ChatBotSearchBar;
