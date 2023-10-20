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
          {/* Add more content specific to the 'organisation' page */}
        </div>
      ) : currentPage === 'chatBots' ? (
        <AllChatBots />
      ) : (
        <div>
          <p>Default content for all other pages</p>
          {/* You can add more content here or handle additional cases */}
        </div>
      )}
    </div>
  );
}

export default OrganisationContent