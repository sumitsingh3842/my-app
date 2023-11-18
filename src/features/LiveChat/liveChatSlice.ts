import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Conversation {
    endUserId: string;
    name: string;
    avatar: string;
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
  selectedConversationContent?: ConversationContent[];
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
    setConversations: (state, action: PayloadAction<Conversation[]>) => {
        state.conversations = action.payload;
        },
    addConversation: (state, action: PayloadAction<Conversation>) => {
        state.conversations.push(action.payload);
        },
    setSelectedConversation: (state, action: PayloadAction<SelectedConversation>) => {
        state.selectedConversation = action.payload;
        },
    setSelectedConversationContent: (state, action: PayloadAction<ConversationContent[]>) => {
        state.selectedConversationContent = action.payload;
        },
    addConversationContent: (state, action: PayloadAction<ConversationContent>) => {
        state.selectedConversationContent?.push(action.payload);
        }
  },
});

export const { setConversations, addConversation, setSelectedConversation, setSelectedConversationContent, addConversationContent } = liveChatSlice.actions;

export default liveChatSlice.reducer;
