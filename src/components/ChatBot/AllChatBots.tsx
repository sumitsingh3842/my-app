import { Button,Box, Typography } from '@mui/material'
import React, {useState} from 'react'
import CreateChatBot from './CreateChatBot';
import '../../styles/components/ChatBot/AllChatBots.css'

function AllChatBots() {
  const [chatForm, setChatForm] = useState(false);

  return (
    <div>
      <div className='chatBotHeadDiv'>
        <Typography className='allChatBotHeader'>All Chat Bots</Typography>
        <Button className='createChatBotButton' onClick={()=>setChatForm(true)}>New Chat Bot</Button>
      </div>
      {chatForm ? (
        <CreateChatBot setChatForm={setChatForm}/>
      ) : (
        <div></div>
      )}
    </div>
  )
}

export default AllChatBots