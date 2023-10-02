import React,{useState} from 'react'
import DashBoardBody from '../components/DashBoard/DashBoardBody/DashBoardBody'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Loading from '../components/Loading/Loading';
import {  withAuthenticationRequired } from "@auth0/auth0-react";
import '../styles/screens/DashBoard.css'
export function DashBoard() {
const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
    },
    // Other theme properties...
  });

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };
  
  return (
    <div className='DashBoardContainer'>
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <DashBoardBody isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    </ThemeProvider>
    </div>  
  )
}

export default withAuthenticationRequired(DashBoard, {
  onRedirecting: () => <Loading />,
});