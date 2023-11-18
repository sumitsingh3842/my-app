export type Conversation = {
    endUserId: string;
    avatar: string;
    name: string;
    timestamp: string;
    lastMessage: string;
    unreadCount?: number;
};
export type ConversationContent = {
    endUserId: string;
    source: string;
    integrationId: string;
    message: string;
    createdEpoch: number;
    unread: string;
};