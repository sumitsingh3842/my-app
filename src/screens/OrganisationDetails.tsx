import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks';
import OrganisationSideBar from '../components/OrganisationDetails/OrganisationSideBar'
import OrganisationMain from '../components/OrganisationDetails/OrganisationMain'
import '../styles/screens/OrganisationDetails.css'
import { useParams } from 'react-router-dom';
function OrganisationDetails() {
  const { orgId, orgName } = useParams<{ orgId?: string; orgName?: string }>();
  const [currentPage,setCurrentPage]=useState('project');
  const organizationId = orgId || '';
  const organizationName = orgName || '';
  return (
    <div className='orgDetailsDiv'>
        <OrganisationSideBar setCurrentPage={setCurrentPage}/>
        <OrganisationMain orgId={organizationId} orgName={organizationName} currentPage={currentPage} />
    </div>
  )
}

export default OrganisationDetails