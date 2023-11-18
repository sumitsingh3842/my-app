import React, { useEffect, useCallback, useState } from 'react';
import LiveChatContent from '../components/LiveChat/LiveChatContent';
import { usePromiseTracker, trackPromise } from 'react-promise-tracker';
import LiveChatSideBar from '../components/LiveChat/LiveChatSideBar';
import '../styles/screens/LiveChat.css';
import { getAllChats } from '../axios-client/get-all-chats';
import ReactLoading from 'react-loading';
import { setConversations } from '../features/LiveChat/liveChatSlice'; // Adjust import path
import { Conversation, ConversationContent } from '../components/LiveChat/types';
interface GetAllChatsResponse {
  isError: boolean;
  data?: Conversation[];
}
function LiveChat() {
  const { promiseInProgress } = usePromiseTracker();
  const [webSocket, setWebSocket] = useState<WebSocket | null>(null);

  // `useCallback` is used to memoize the `handleMessage` function.
  const handleMessage = useCallback((message: MessageEvent) => {
    console.log('WebSocket message:', message.data);
  }, []);

  const sendMessage = (message: ConversationContent) => {
    if (webSocket && webSocket.readyState === WebSocket.OPEN) {
      webSocket.send(JSON.stringify(message)); // Send a message
    } else {
      console.log('WebSocket is not connected');
    }
  };
  
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
  useEffect(() => {
    const connectWebSocket = () => {
      const webSocketURL = 'wss://zj08u192fg.execute-api.us-east-1.amazonaws.com/dev?integrationId=123&liveId=123'; // Replace with your WebSocket URL
      const ws = new WebSocket(webSocketURL);

      ws.onopen = () => {
        console.log('WebSocket Connected');
        setWebSocket(ws);
      };

      ws.onmessage = handleMessage;

      ws.onerror = (error) => {
        console.error('WebSocket Error:', error);
      };

      ws.onclose = () => {
        console.log('WebSocket Disconnected');
      };
    };

    connectWebSocket();
    return () => {
      if (webSocket) {
        webSocket.close();
      }
    };
  }, [handleMessage]);

  return (
    <div className='liveChatMainDiv'>
      {promiseInProgress ? (
        <ReactLoading type="spin" color="#1976d2" className="createOrgLoading" />
      ) : (
        <>
          <LiveChatSideBar />
          <LiveChatContent onMessage={handleMessage} sendMessage={sendMessage}/>
        </>
      )}
    </div>
  );
}

export default LiveChat;
