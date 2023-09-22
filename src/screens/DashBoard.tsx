import React,{useState} from 'react'
import DashBoardNav from '../components/DashBoard/DashBoardNav'
import DashBoardBody from '../components/DashBoard/DashBoardBody/DashBoardBody'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Loading from '../components/Loading/Loading';
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
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
      <DashBoardNav isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    <DashBoardBody />
    </ThemeProvider>
    </div>  
  )
}

export default withAuthenticationRequired(DashBoard, {
  onRedirecting: () => <Loading />,
});