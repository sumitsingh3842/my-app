import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import Person2Icon from '@mui/icons-material/Person2';
import '../../styles/components/DashBoard/DashBoardMenuBar.css'
interface OrganisationMenuBarProps{
    orgName:string
  }
function OrganisationMenuBar({orgName}:OrganisationMenuBarProps) {
  const {
    user,
    isAuthenticated,
    logout,
  } = useAuth0();
  const navigate = useNavigate();
  const logoutWithRedirect = () =>
    logout({
        logoutParams: {
          returnTo: window.location.origin,
        }
    });
  return (
    <AppBar position="static" sx={{backgroundColor:'#1c1c1c',height:'8.8vh'}}>
      <Toolbar>
        {/* Add the company logo */}
        <Typography>{orgName}</Typography>
        <div style={{ flexGrow: 1 }}>
          {/* You can also add a company name text here */}
        </div>
        {isAuthenticated && user && (
                <Box sx={{ flexGrow: 0 }}>
                <IconButton onClick={()=>navigate('/profile')} className="profileIcon">
                  <Person2Icon  />
                </IconButton>
                <IconButton  className="notificationIcon">
              <NotificationsIcon  />
            </IconButton>
            <IconButton  onClick={()=>logoutWithRedirect()} className="logoutIcon">
              <PowerSettingsNewOutlinedIcon />
            </IconButton>
            </Box>
              )}
      </Toolbar>
    </AppBar>
  );
}

export default OrganisationMenuBar;