import { Box, Input, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import AddIcon from '@mui/icons-material/Add';

const ChatTypeBar: React.FC = () => {
  return (
    <Box display="flex" alignItems="center" padding="12px" bgcolor="#333" borderTop="1px solid #444">
      <IconButton color="inherit"><AddIcon /></IconButton>
      <Input fullWidth placeholder="Type a message" sx={{ color: "white", bgcolor: "#404040", borderRadius: "24px", padding: "8px 12px" }} />
      <IconButton color="inherit"><SendIcon /></IconButton>
    </Box>
  );
};
export default ChatTypeBar;