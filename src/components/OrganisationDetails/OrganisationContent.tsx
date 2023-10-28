import React from 'react'
import AllChatBots from '../ChatBot/AllChatBots';
import '../../styles/components/OrganisationDetails/OrganisationMain.css'
interface OrganisationContentProps{
  orgId:string;
  orgName:string;
  currentPage:string
}
function OrganisationContent({orgId,orgName,currentPage}:OrganisationContentProps) {
  return (
    <div className='orgContentDiv'>
      {currentPage === 'organisation' ? (
        <div>
          <h1>{orgName}</h1>
          <p>Organisation ID: {orgId}</p>
        </div>
      ) : currentPage === 'chatBots' ? (
        <AllChatBots />
      ) : (
        <div>
          <p>Default content for all other pages</p>
        </div>
      )}
    </div>
  );
}

export default OrganisationContent