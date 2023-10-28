import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import '../../styles/components/OrganisationDetails/OrganisationSideBar.css'
interface OrganisationSideBarProps{
    setCurrentPage: (value: string) => void;
}
function OrganisationSideBar({setCurrentPage}:OrganisationSideBarProps) {
  const navigate = useNavigate();
  const items=['Project','Live Chat','ChatBots','Billing','Documentation','Help'];
  const handleSideBarClick = (item:string) => {
    if(item==='ChatBots')
    setCurrentPage('chatBots')
    else if(item==='Live Chat')
    setCurrentPage('live-chat')
    else if(item==='Project')
    setCurrentPage('project')
  };
  return (
    <Grid className='orgSideBarDiv'>
    {items.map((item) => (
      <div key={item} onClick={()=>handleSideBarClick(item)} className='orgSideBarItemDiv'>
      <Box>
        {item}
      </Box>
    </div>
    ))}
  </Grid>
  );
}

export default OrganisationSideBar;
