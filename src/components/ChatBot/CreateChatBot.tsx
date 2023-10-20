import React from 'react'
import { Box, Button, Typography,Grid,TextField } from '@mui/material'
import { usePromiseTracker,trackPromise  } from 'react-promise-tracker';
import { useForm } from 'react-hook-form';
import ReactLoading from 'react-loading';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import '../../styles/components/ChatBot/CreateChatBot.css'

interface CreateChatBotProps {
  setChatForm: (value: boolean) => void;
}
interface FormData {
  name: string;
  description: string
}
function CreateChatBot({setChatForm}: CreateChatBotProps) {
  const navigate = useNavigate();
  const { promiseInProgress } = usePromiseTracker(); 
  const { register, handleSubmit, formState } = useForm<FormData>();
  const onSubmit = async (data: FormData) => {
    console.log(data);
  };
  return (
    <Grid className={`${promiseInProgress ? 'black-bg' : 'chatForm'}`}>
          {promiseInProgress ? ( 
            <ReactLoading
            type="spin"
            color="#1976d2"
            className="createOrgLoading"
          />):(
            <form onSubmit={handleSubmit(onSubmit)} className='chatBotForm'>
              <Box className="chatbot-form-header">
            <Typography variant="h5">Create Chat Bot</Typography>
            <CloseIcon onClick={() => setChatForm(false)} sx={{ cursor: 'pointer' }} />
          </Box>
          <Grid>
          <Grid>
            <TextField
              autoComplete='off'
              label="Unique Name"
              variant="outlined"
              className='chatFormInput'
              fullWidth
              {...register('name', { required: true })}
              error={!!formState.errors.name}
              helperText={formState.errors.name ? 'Unique name is required' : ''}
            />
          </Grid>
          <Grid>
            <TextField
              autoComplete='off'
              label="Description"
              variant="outlined"
              className='chatFormInput'
              fullWidth
              {...register('description', { required: true })}
              error={!!formState.errors.name}
              helperText={formState.errors.name ? 'Description is required' : ''}
            />
          </Grid>
          <Grid>
            <Button type="submit" variant="contained" color="primary">
              Create
            </Button>
          </Grid>
          </Grid>
          </form>
          )}
    </Grid>
  );
}

export default CreateChatBot