import React,{useState} from 'react'
import DashBoardNav from '../components/DashBoard/DashBoardNav'
import DashBoardMenuBar from '../components/DashBoard/DashBoardMenuBar'
import DashBoardBody from '../components/DashBoard/DashBoardBody/DashBoardBody'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
function DashBoard() {
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
    <DashBoardMenuBar />
    <DashBoardBody />
    </ThemeProvider>
    </div>  
  )
}

export default DashBoard