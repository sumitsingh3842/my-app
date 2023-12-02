import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import ChatContent from './ChatContent';
import ChatHeader from './ChatHeader';
import ChatTypeBar from './ChatTypeBar';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { setSelectedConversationContent } from '../../features/LiveChat/liveChatSlice';
import ReactLoading from 'react-loading';
import { usePromiseTracker } from 'react-promise-tracker';
import { ConversationContent } from './types';

interface LiveChatContentProps {
  sendMessage: (message: ConversationContent) => void;
}

function LiveChatContent({ sendMessage: handleSendMessage }: LiveChatContentProps) {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const dispatch = useDispatch();
  const currentConversation = useSelector((state: RootState) => state.liveChat.selectedConversationContent);
  const { promiseInProgress } = usePromiseTracker({ area: 'liveChatContentArea' }); // Specify area for tracking

  useEffect(() => {
    if (searchQuery && currentConversation) {
      const loweredSearchQuery = searchQuery.toLowerCase();
      const filtered = currentConversation.filter(convo => convo.message.toLowerCase().includes(loweredSearchQuery));
      dispatch(setSelectedConversationContent(filtered));
    }
  }, [currentConversation, searchQuery, dispatch]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{
        width: '80%',
        backgroundColor: '#20232a',
        height: '91vh',
        justifyContent: promiseInProgress ? 'center' : 'flex-start', // Default to 'flex-start' when not loading
        alignItems: promiseInProgress ? 'center' : 'stretch' // Default to 'stretch' when not loading
      }}
    >
      {promiseInProgress ? (
        <ReactLoading type="spin" color="#1976d2" className="liveChatContentLoading" />
      ) : (
        <>
          {currentConversation && (
            <>
              <ChatHeader onSearchChange={setSearchQuery} />
              <ChatContent conversations={currentConversation} />
              <ChatTypeBar sendMessage={handleSendMessage} />
            </>
          )}
        </>
      )}
    </Box>
  );
  
}

export default LiveChatContent;
