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
  return (
    <Box>
        <Container maxWidth={false}>
          <Toolbar disableGutters>
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
      </Box>
  );
}

export default DashBoardMenuBar;