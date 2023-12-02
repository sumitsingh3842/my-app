import { Box, Typography } from '@mui/material';

type ConversationContent = {
  endUserId: string;
  source: string;
  integrationId: string;
  message: string;
  createdEpoch: number;
  unread:boolean;

};

type ChatContentProps = {
  conversations: ConversationContent[];
};

const ChatContent = ({ conversations }: ChatContentProps) => {
  return (
    <Box flexGrow={1} overflow="auto" bgcolor="#20232a" padding="16px" display={'flex'} flexDirection={'column'}>
      {conversations.map((conversation, index) => (
        <Box
          key={index}
          bgcolor={conversation.source === 'user' ? '#DCF8C6' : '#262D31'}
          color={conversation.source === 'user' ? '#000' : '#FFF'}
          mx={2}
          my={1}
          px={3}
          py={2}
          borderRadius={16}
          textAlign={conversation.source === 'user' ? 'left' : 'right'}
          maxWidth={400}
          alignSelf={conversation.source === 'user' ? 'flex-start' : 'flex-end'}
          display="flex"
        >
          <Typography variant="body1">{conversation.message}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default ChatContent;
