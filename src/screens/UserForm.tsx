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
import { createUser } from '../axios-client/create-user';
interface UserFormProps {
  onSubmit: (data: FormData) => void;
}

interface FormData {
  email: string;
  phone_number: string;
  password:string,
  name: string;
  family_name: string;
  blocked: boolean;
  email_verified: boolean;
  phone_verified: boolean;
  verify_email: boolean;
  connection:string
}

const UserForm = () => {
  const navigate = useNavigate();
  const token=sessionStorage.getItem('accessToken');
  console.log(token);
  
  const { register, handleSubmit, formState } = useForm<FormData>();
  const onSubmit = async(data: FormData) => {
    console.log(data);
    data.connection="Username-Password-Authentication";
    const createUserResp= await createUser(token,data);
    if(!createUserResp.isError){
      navigate('/dashboard');
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
      <Grid item xs={12}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            {...register('name', { required: true })}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            {...register('email', { required: true })}
            error={!!formState.errors.email}
            helperText={formState.errors.email ? 'Email is required' : ''}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            {...register('password', { required: true })}
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

export default UserForm;
