import React, { useEffect, useState } from 'react';
import LiveChatContent from '../components/LiveChat/LiveChatContent';
import { usePromiseTracker, trackPromise } from 'react-promise-tracker';
import LiveChatSideBar from '../components/LiveChat/LiveChatSideBar';
import '../styles/screens/LiveChat.css';
import { getAllChats } from '../axios-client/get-all-chats';
import ReactLoading from 'react-loading';
import { setConversations } from '../features/LiveChat/liveChatSlice';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import { Conversation, ConversationContent } from '../components/LiveChat/types';

interface GetAllChatsResponse {
  isError: boolean;
  data?: Conversation[];
}

function LiveChat() {
  const { promiseInProgress } = usePromiseTracker();
  const [webSocket, setWebSocket] = useState<WebSocket | null>(null);
  const conversations = useSelector((state: RootState) => state.liveChat.conversations);
  const dispatch = useDispatch();
  const queryParams = '?integrationId=123&liveId=123';
  const baseWebSocketURL = 'wss://zj08u192fg.execute-api.us-east-1.amazonaws.com/dev';
  const connectWebSocket = () => {
    // Close existing WebSocket connection if open
    if (webSocket) {
      webSocket.close();
    }

    // Build the complete WebSocket URL
    const webSocketURL = baseWebSocketURL + queryParams;

    // Establish a new WebSocket connection
    const ws = new WebSocket(webSocketURL);

    ws.onopen = () => {
      console.log('WebSocket Connected');
      setWebSocket(ws);
    };

    ws.onmessage = (message) => {
      console.log('WebSocket message:', message.data);
    };

    ws.onerror = (error) => {
      console.error('WebSocket Error:', error);
    };

    ws.onclose = () => {
      console.log('WebSocket Disconnected');
      setWebSocket(null);
    };
  };

  const sendMessage = (message: ConversationContent) => {
    if (webSocket && webSocket.readyState === WebSocket.OPEN) {
      webSocket.send(JSON.stringify(message));
    } else {
      console.log('WebSocket is not connected');
    }
  };

  useEffect(() => {
    // Fetch all chats
    const fetchChats = async () => {
      try {
        const getAllChatResp = await trackPromise(getAllChats()) as GetAllChatsResponse;
        if (getAllChatResp.isError || !getAllChatResp.data) {
          console.log("Error in fetching all chats");
          return;
        }
        dispatch(setConversations(getAllChatResp.data));
      } catch (error) {
        console.error('Failed to fetch conversations:', error);
      }
    };

    fetchChats();
  }, [dispatch]);

  useEffect(() => {
    connectWebSocket();
    const interval = setInterval(connectWebSocket, 480000); // 8 minutes in milliseconds

    return () => {
      clearInterval(interval);
      if (webSocket) {
        webSocket.close();
      }
    };
  }, []);

  return (
    <div className='liveChatMainDiv'>
      {promiseInProgress ? (
        <ReactLoading type="spin" color="#1976d2" className="liveChatLoading" />
      ) : (
        <>
          <LiveChatSideBar conversations={conversations} />
          <LiveChatContent sendMessage={sendMessage}/>
        </>
      )}
    </div>
  );
}

export default LiveChat;
