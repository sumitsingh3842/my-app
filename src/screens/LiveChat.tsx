import React, { useEffect, useState } from 'react';
import LiveChatContent from '../components/LiveChat/LiveChatContent';
import { usePromiseTracker, trackPromise } from 'react-promise-tracker';
import LiveChatSideBar from '../components/LiveChat/LiveChatSideBar';
import '../styles/screens/LiveChat.css';
import { getAllChats } from '../axios-client/get-all-chats';
import ReactLoading from 'react-loading';

type Conversation = {
  endUserId: string;
  avatar: string | React.ReactNode;
  name: string;
  timestamp: string;
  lastMessage: string;
  unreadCount?: number;
};
type ConversationContent = {
  endUserId: string;
  source: string;
  integrationId: string;
  message: string;
  createdEpoch: number;
  unread:string;

};
interface GetAllChatsResponse {
  isError: boolean;
  data?: Conversation[];
}
function LiveChat() {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [currentConversation, setCurrentConversation] = useState<ConversationContent[] | null>(null);
  const { promiseInProgress } = usePromiseTracker();

  useEffect(() => {
    // Function to fetch all chats and update the state
    const fetchChats = async () => {
      try {
        const getAllChatResp = await trackPromise(getAllChats()) as GetAllChatsResponse;
    if (getAllChatResp.isError || !getAllChatResp.data) {
      console.log("Error in fetching all chats");
      return;
    }
        setConversations(getAllChatResp.data);
      } catch (error) {
        console.error('Failed to fetch conversations:', error);
      }
    };

    fetchChats();
  }, []);

  return (
    <div className='liveChatMainDiv'>
      {promiseInProgress ? (
        <ReactLoading type="spin" color="#1976d2" className="createOrgLoading" />
      ) : (
        <>
          <LiveChatSideBar conversations={conversations} setCurrentConversation={setCurrentConversation} />
          <LiveChatContent conversation={currentConversation} />
        </>
      )}
    </div>
  );
  
          }
export default LiveChat;
