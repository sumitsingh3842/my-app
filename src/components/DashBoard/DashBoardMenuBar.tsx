import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

function DashBoardMenuBar() {
  return (
    <AppBar position='static' sx={{backgroundColor:'grey',height:'5%'}}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
        <Box sx={{ flexGrow: 0,display:'flex' }}>
              <Typography
            variant='subtitle1'
            noWrap
            component='div'
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' },cursor:'pointer' }}
          >
            ToolBar
            </Typography>
              </Box>
            </Toolbar>
            </Container>
            </AppBar>
  )
}

export default DashBoardMenuBar