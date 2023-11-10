import { Box } from '@mui/material'
import React from 'react'
import ChatContent from './ChatContent'
import ChatHeader from './ChatHeader'
import ChatTypeBar from './ChatTypeBar'
import { getChatContent } from '../../axios-client/get-chat-content'
import { usePromiseTracker, trackPromise } from 'react-promise-tracker';
import ReactLoading from 'react-loading';
type ConversationContent = {
  endUserId: string;
  source: string;
  integrationId: string;
  message: string;
  createdEpoch: number;
  unread:string;

};
function LiveChatContent({conversation}: {conversation: ConversationContent[]|null}) {
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  const [filteredConversations, setFilteredConversations] = React.useState<ConversationContent[]>(conversation || []);
  const { promiseInProgress } = usePromiseTracker();

  React.useEffect(() => {
    if (searchQuery && conversation) {
      const loweredSearchQuery = searchQuery.toLowerCase();
      const filtered = conversation.filter(convo => convo.message.toLowerCase().includes(loweredSearchQuery));
      setFilteredConversations(filtered);
    } else {
      setFilteredConversations(conversation || []);
    }
  }, [conversation, searchQuery]);
  return (
    <Box display="flex" flexDirection="column" sx={{width:'80%',backgroundColor:'#20232a',height:'91vh'}}>
      {promiseInProgress ? (
        <ReactLoading type="spin" color="#1976d2" className="createOrgLoading" />
      ) : (
        <>
           {conversation && (
        <>
          <ChatHeader onSearchChange={setSearchQuery} />
          <ChatContent conversations={filteredConversations} />
          <ChatTypeBar conversations={conversation} />
        </>
      )}
        </>
      )}
    </Box>
  );
}

export default LiveChatContent