import React from 'react'
import AllChatBots from '../ChatBot/AllChatBots';
import OrganisationContent from './OrganisationContent';
import OrganisationMenuBar from './OrganisationMenuBar';
import '../../styles/components/OrganisationDetails/OrganisationMain.css'
interface OrganisationMainProps{
  orgId:string;
  orgName:string;
  currentPage:string
}
function OrganisationMain({orgId,orgName,currentPage}:OrganisationMainProps) {
  return (
    <div className='orgMainWindowDiv'>
      <OrganisationMenuBar orgName={orgName}/>
      <OrganisationContent orgId={orgId} orgName={orgName} currentPage={currentPage} />
    </div>
  );
}

export default OrganisationMain