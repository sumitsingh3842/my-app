import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
interface DashBoardMenuBarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}
function DashBoardMenuBar({ activeTab, onTabChange }: DashBoardMenuBarProps) {
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
      <AppBar position='static' sx={{ backgroundColor: 'white', height: '5%' }}>
          <Toolbar disableGutters sx={{ flexGrow: 0, display: 'flex', backgroundColor: 'white',width:'100%' ,justifyContent: 'space-evenly', alignItems: 'center'  }}>
              <Button  style={activeTab === 'organisation' ? activeButtonStyle : inactiveButtonStyle} onClick={() => onTabChange('organisation')}>Organisation</Button>
              <Button style={activeTab === 'users' ? activeButtonStyle : inactiveButtonStyle} onClick={() => onTabChange('users')}>Users</Button>
          </Toolbar>
      </AppBar>
  );
}

export default DashBoardMenuBar;