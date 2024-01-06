import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from "react-router-dom";
import LoginButton from './LoginButton';
import SignupButton from './SignupButton';



const pages=['Products','Pricing','Blogs','Help','Contact Us']
function HomeNav() {
    const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar disableGutters>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{ my: 2, color: 'white', display: 'block',margin:'0px' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
       <Box>
       <SignupButton />
       <LoginButton />
       </Box> 
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default HomeNav