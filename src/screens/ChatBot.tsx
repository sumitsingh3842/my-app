import React, { useState } from 'react'
import OrganisationSideBar from '../components/OrganisationDetails/OrganisationSideBar'
import ChatBotMain from '../components/ChatBotBuilder/ChatBotMain';
import '../styles/screens/ChatBot.css'
function ChatBot() {
  const [currentPage,setCurrentPage]=useState('general');

  return (
    <div className='createChatBotDiv'>
        <OrganisationSideBar setCurrentPage={setCurrentPage}/>
        <ChatBotMain />
    </div>
  )
}

export default ChatBot