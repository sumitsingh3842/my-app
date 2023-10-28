import React, { useState } from 'react'
import OrganisationSideBar from '../components/OrganisationDetails/OrganisationSideBar'
import ChatBotMain from '../components/ChatBotBuilder/ChatBotMain';
import '../styles/screens/ChatBot.css'
import { useParams } from 'react-router-dom';
function ChatBot() {
  const { orgId, orgName } = useParams<{ orgId?: string; orgName?: string }>();
  const [currentPage,setCurrentPage]=useState('general');
  const organizationId = orgId || '';
  const organizationName = orgName || '';
  return (
    <div className='createChatBotDiv'>
        <OrganisationSideBar orgId={organizationId} orgName={organizationName} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        <ChatBotMain />
    </div>
  )
}

export default ChatBot