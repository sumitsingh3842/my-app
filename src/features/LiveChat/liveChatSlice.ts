import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Conversation {
    endUserId: string;
    avatar: string | React.ReactNode;
    name: string;
    timestamp: string;
    lastMessage: string;
    unreadCount?: number;
  };
interface ConversationContent {
    endUserId: string;
    source: string;
    integrationId: string;
    message: string;
    createdEpoch: number;
    unread:string;
  };
interface SelectedConversation{
    endUserId: string;
    avatar: string;
    name: string;
  };
interface conversationsState {
  conversations: Conversation[];
  selectedConversation: SelectedConversation;
}

const initialState: conversationsState = {
  conversations: [],
  selectedConversation: {
    endUserId: "",
    avatar: "",
    name: ""
  }
};

export const liveChatSlice = createSlice({
  name: 'livechat',
  initialState,
  reducers: {
    setConversation: (state, action: PayloadAction<Conversation[]>) => {
        state.conversations = action.payload;
        },
    addConversation: (state, action: PayloadAction<Conversation>) => {
        state.conversations.push(action.payload);
        },
    setSelectedConversation: (state, action: PayloadAction<SelectedConversation>) => {
        state.selectedConversation = action.payload;
        }
  },
});

export const { setConversation, addConversation, setSelectedConversation } = liveChatSlice.actions;

export default liveChatSlice.reducer;
