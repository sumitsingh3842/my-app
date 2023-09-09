import React from 'react';
import { Container, Paper, IconButton } from '@mui/material';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import { useAppDispatch,useAppSelector } from '../../../app/hooks';
import '../../../styles/components/DashBoard/DashBoardBody/DashBoardCode.css'
const DashBoardCode: React.FC = () => {
  const description=useAppSelector((state)=>state.dashBoard.description);
  const handleCopyClick = () => {
    
    const contentDiv = document.querySelector('.content'); // Get the content div
    if (contentDiv) {
      const range = document.createRange();
      range.selectNode(contentDiv);
      window.getSelection()?.removeAllRanges();
      window.getSelection()?.addRange(range);

      try {
        // Execute the copy command
        document.execCommand('copy');
        console.log('Copied');
      } catch (error) {
        console.error('Copy failed', error);
      }

      window.getSelection()?.removeAllRanges();
    }
    
  };

  return (
    <Container maxWidth="md" className='DashBoardCodeContainer'>
      <Paper elevation={3} style={{height:'100%' }}>
        <IconButton onClick={handleCopyClick} aria-label="Copy content">
          <FileCopyIcon />
        </IconButton>
        <div style={{ marginTop: '10px' }} className='content'>
        AWSTemplateFormatVersion: "2010-09-09"<br />
        {description? <p>Description:"{description}"</p>:<p></p>}
        
        </div>
      </Paper>
    </Container>
  );
}

export default DashBoardCode