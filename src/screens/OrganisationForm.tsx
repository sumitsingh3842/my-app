import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {
  TextField,
  Checkbox,
  Button,
  FormControlLabel,
  Grid,
} from '@mui/material';
import { createOrganisation  } from '../axios-client/create-organisation';
interface UserFormProps {
  onSubmit: (data: FormData) => void;
}

interface FormData {
  name:string,
  display_name: string;
}

const OrganisationForm = () => {
  const navigate = useNavigate();
  const token=sessionStorage.getItem('accessToken');
  console.log(token);
  
  const { register, handleSubmit, formState } = useForm<FormData>();
  const onSubmit = async(data: FormData) => {
    console.log(data);
    const createUserResp= await createOrganisation(data);
    if(!createUserResp.isError){
      navigate('/dashboard');
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
      <Grid item xs={12}>
          <TextField
            label="Unique Name"
            variant="outlined"
            fullWidth
            {...register('name', { required: true })}
            error={!!formState.errors.name}
            helperText={formState.errors.name ? 'Unique name is required' : ''}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Display Name"
            variant="outlined"
            fullWidth
            {...register('display_name', { required: true })}
            error={!!formState.errors.display_name}
            helperText={formState.errors.display_name ? 'Display name is required' : ''}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default OrganisationForm;
