import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  TextField,
  Button,
  Box,
  Grid,
  Typography,
  Switch, // Import the Switch component
} from '@mui/material';
import { useAuth0 } from "@auth0/auth0-react";
import { createOrganisation } from '../axios-client/create-organisation';
import CloseIcon from '@mui/icons-material/Close';
import { useAppDispatch } from '../app/hooks';
import { addOrganisation } from '../features/DashBoard/dashBoardSlice';
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading/Loading';
import {  withAuthenticationRequired } from "@auth0/auth0-react";
import { usePromiseTracker,trackPromise  } from 'react-promise-tracker';
import ReactLoading from 'react-loading';
import '../styles/screens/OrganisationForm.css'

interface FormData {
  name: string;
  emailId:any;
  isPremium: boolean;
}

const OrganisationForm = () => {
  const { user } = useAuth0();
  const navigate = useNavigate();
  const { register, handleSubmit, formState } = useForm<FormData>();
  const [isPremium, setIsPremium] = useState(false); // State for the premium mode
  const dispatch = useAppDispatch();
  const { promiseInProgress } = usePromiseTracker(); 
  const onSubmit = async (data: FormData) => {

    data.emailId=user?.email;
    data.isPremium=isPremium;
    console.log('Premium Mode:', isPremium); // Log the selected mode
    trackPromise(
    createOrganisation(data)
    .then((createOrgResp) =>{
    if(!createOrgResp.isError){
      console.log("Organisation created successfully");
      console.log(createOrgResp.data);
      dispatch(addOrganisation(createOrgResp.data));
    }
    console.log(createOrgResp);
    navigate('/dashboard');
  }))
  };

  return (
    <Grid className='organisationForm'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid
          container
          spacing={2}
          sx={{ backgroundColor: 'white', padding: '10px', borderRadius: '5px' }}
        >
          <Box className="organisation-form-header">
            <Typography variant="h5">Create Organisation</Typography>
            <CloseIcon onClick={() => navigate('/dashboard')} sx={{ cursor: 'pointer' }} />
          </Box>
          {promiseInProgress ? ( 
            <ReactLoading
            type="spin"
            color="#1976d2"
            className="loading"
          />):(
            <Grid>
          <Grid>
            <TextField
              label="Unique Name"
              variant="outlined"
              fullWidth
              {...register('name', { required: true })}
              error={!!formState.errors.name}
              helperText={formState.errors.name ? 'Unique name is required' : ''}
            />
          </Grid>
          <Grid>
            {/* Toggle Button for Free and Premium Mode */}
            <Typography>Premium:</Typography>
            <Switch
              checked={isPremium}
              onChange={() => setIsPremium(!isPremium)}
              name="premiumMode"
              inputProps={{ 'aria-label': 'premium mode switch' }}
            />
          </Grid>
          <Grid>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
          </Grid>
          )}
        </Grid>
      </form>
    </Grid>
  );
};

export default withAuthenticationRequired(OrganisationForm, {
  onRedirecting: () => <Loading />,
});
