import React from 'react'
import LiveChatContent from '../components/LiveChat/LiveChatContent'
import LiveChatSideBar from '../components/LiveChat/LiveChatSideBar'
import '../styles/screens/LiveChat.css'
type Conversation = {
  id: number;
  avatar: string | React.ReactNode; // Either a URL to an image or a React Node for icons
  name: string;
  timestamp: string;
  lastMessage: string;
  unreadCount?: number;
};
const conversations: Conversation[] = [
  {
    id: 1,
    avatar: "https://example.com/path/to/image.jpg",
    name: "Sumit Singh",
    timestamp: "12:32",
    lastMessage: "Hello, how are you?",
    unreadCount: 0,
  },
  {
      id: 1,
      avatar: "https://example.com/path/to/image.jpg",
      name: "Naveen",
      timestamp: "12:32",
      lastMessage: "Good Morning",
      unreadCount: 0,
    },
    {
      id: 1,
      avatar: "https://example.com/path/to/image.jpg",
      name: "Mom",
      timestamp: "12:32",
      lastMessage: "What are you doing?",
      unreadCount: 0,
    },
    {
      id: 1,
      avatar: "https://example.com/path/to/image.jpg",
      name: "my list",
      timestamp: "12:32",
      lastMessage: "https://udemy.com/course/aws...",
      unreadCount: 0,
    },
    {
      id: 1,
      avatar: "https://example.com/path/to/image.jpg",
      name: "my list",
      timestamp: "12:32",
      lastMessage: "https://udemy.com/course/aws...",
      unreadCount: 0,
    },
    {
      id: 1,
      avatar: "https://example.com/path/to/image.jpg",
      name: "my list",
      timestamp: "12:32",
      lastMessage: "https://udemy.com/course/aws...",
      unreadCount: 0,
    },
    {
      id: 1,
      avatar: "https://example.com/path/to/image.jpg",
      name: "my list",
      timestamp: "12:32",
      lastMessage: "https://udemy.com/course/aws...",
      unreadCount: 0,
    },
    {
      id: 1,
      avatar: "https://example.com/path/to/image.jpg",
      name: "my list",
      timestamp: "12:32",
      lastMessage: "https://udemy.com/course/aws...",
      unreadCount: 0,
    },
    {
      id: 1,
      avatar: "https://example.com/path/to/image.jpg",
      name: "my list",
      timestamp: "12:32",
      lastMessage: "https://udemy.com/course/aws...",
      unreadCount: 0,
    },
    {
      id: 1,
      avatar: "https://example.com/path/to/image.jpg",
      name: "my list",
      timestamp: "12:32",
      lastMessage: "https://udemy.com/course/aws...",
      unreadCount: 0,
    },
    {
      id: 1,
      avatar: "https://example.com/path/to/image.jpg",
      name: "my list",
      timestamp: "12:32",
      lastMessage: "https://udemy.com/course/aws...",
      unreadCount: 0,
    },
    {
      id: 1,
      avatar: "https://example.com/path/to/image.jpg",
      name: "my list",
      timestamp: "12:32",
      lastMessage: "https://udemy.com/course/aws...",
      unreadCount: 0,
    },
    {
      id: 1,
      avatar: "https://example.com/path/to/image.jpg",
      name: "my list",
      timestamp: "12:32",
      lastMessage: "https://udemy.com/course/aws...",
      unreadCount: 0,
    },
    {
      id: 1,
      avatar: "https://example.com/path/to/image.jpg",
      name: "my list",
      timestamp: "12:32",
      lastMessage: "https://udemy.com/course/aws...",
      unreadCount: 0,
    },
    {
      id: 1,
      avatar: "https://example.com/path/to/image.jpg",
      name: "my list",
      timestamp: "12:32",
      lastMessage: "https://udemy.com/course/aws...",
      unreadCount: 0,
    },
    {
      id: 1,
      avatar: "https://example.com/path/to/image.jpg",
      name: "my list",
      timestamp: "12:32",
      lastMessage: "https://udemy.com/course/aws...",
      unreadCount: 0,
    }
];
function LiveChat() {
  const [currentConversation, setCurrentConversation] = React.useState<Conversation | null>(null)
  return (
    <div className='liveChatMainDiv'>
      <LiveChatSideBar conversations={conversations} setCurrentConversation={setCurrentConversation} />
      <LiveChatContent conversation={currentConversation} />
    </div>
  )
}

export default LiveChat