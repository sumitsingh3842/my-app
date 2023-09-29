import React from 'react';
import { AppBar, Toolbar, Button ,Box,IconButton,Avatar,Menu,MenuItem,Typography,Container} from '@mui/material';
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';
import { ToggleOff, ToggleOn } from '@mui/icons-material';
interface DashBoardMenuBarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}
function DashBoardMenuBar({ activeTab, onTabChange,isDarkMode,toggleDarkMode }: DashBoardMenuBarProps) {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const {
    user,
    isAuthenticated,
    logout,
  } = useAuth0();
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  }
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const navigate = useNavigate();
  const logoutWithRedirect = () =>
    logout({
        logoutParams: {
          returnTo: window.location.origin,
        }
    });
  const activeButtonStyle = {
    backgroundColor: '#1976d2',
    color: 'white',
    width:'50%',
    padding:'1%',
    fontFamily: 'Aeonik, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Helvetica, Arial, sans-serif',
    fontSize: '2rem',
    lineHeight: '1.25',
    letterSpacing: '0.02em',
    fontWeight: '500'
  };
  const inactiveButtonStyle = {
    backgroundColor:'white', // Change the colors as needed
    color: 'black',
    width:'50%',
    padding:'1%',
    fontFamily: 'Aeonik, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Helvetica, Arial, sans-serif',
    fontSize: '2rem',
    lineHeight: '1.25',
    letterSpacing: '0.02em',
    fontWeight: '500'
  };
  return (
    <AppBar position="static">
        <Container maxWidth={false}>
          <Toolbar disableGutters>
          <Button  style={activeTab === 'organisation' ? activeButtonStyle : inactiveButtonStyle} onClick={() => onTabChange('organisation')}>Organisation</Button>
              <Button style={activeTab === 'users' ? activeButtonStyle : inactiveButtonStyle} onClick={() => onTabChange('users')}>Users</Button>
              <Box sx={{ flexGrow: 0,margin:'0 5px' }}>
             {isDarkMode?
             <IconButton aria-label="toggleon"  onClick={toggleDarkMode} size="large">
             <ToggleOn fontSize="inherit" />
           </IconButton> :
           <IconButton aria-label="toggleoff"  onClick={toggleDarkMode} size="large">
           <ToggleOff fontSize="inherit" />
         </IconButton>
             }
             
            </Box>
            {isAuthenticated && user && (
                <Box sx={{ flexGrow: 0 }}>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Sumit Singh" src={user.picture} />
                </IconButton>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                  <MenuItem onClick={()=>navigate('/profile')}>
                    <Typography textAlign="center">Profile</Typography>
                  </MenuItem>
                  <MenuItem onClick={() => logoutWithRedirect()}>
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>

              </Menu>
            </Box>
              )}
          </Toolbar>
        </Container>
      </AppBar>
  );
}

export default DashBoardMenuBar;