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
import { createOrganisation } from '../../../../axios-client/create-organisation';
import CloseIcon from '@mui/icons-material/Close';
import { useAppDispatch } from '../../../../app/hooks';
import { addOrganisation } from '../../../../features/DashBoard/dashBoardSlice';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../Loading/Loading';
import {  withAuthenticationRequired } from "@auth0/auth0-react";
import { usePromiseTracker,trackPromise  } from 'react-promise-tracker';
import ReactLoading from 'react-loading';
import '../../../../styles/screens/OrganisationForm.css'

interface FormData {
  name: string;
  emailId:any;
  isPremium: boolean;
  description: string
}
interface OrganisationProps{
  setOrgForm: (value: boolean) => void;
}

const OrganisationForm = ({setOrgForm}:OrganisationProps) => {
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
    setOrgForm(false);
  }))
  };

  return (
    <Grid className={`${promiseInProgress ? 'black-bg' : 'organisationForm'}`}>
          {promiseInProgress ? ( 
            <ReactLoading
            type="spin"
            color="#1976d2"
            className="createOrgLoading"
          />):(
            <form onSubmit={handleSubmit(onSubmit)} className='orgForm'>
              <Box className="organisation-form-header">
            <Typography variant="h5">Create Organisation</Typography>
            <CloseIcon onClick={() => setOrgForm(false)} sx={{ cursor: 'pointer' }} />
          </Box>
          <Grid>
          <Grid>
            <TextField
              autoComplete='off'
              label="Unique Name"
              variant="outlined"
              className='organisationFormInput'
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
              className='organisationFormInput'
              fullWidth
              {...register('description', { required: true })}
              error={!!formState.errors.name}
              helperText={formState.errors.name ? 'Description is required' : ''}
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
          </form>
          )}
    </Grid>
  );
};

export default withAuthenticationRequired(OrganisationForm, {
  onRedirecting: () => <Loading />,
});
