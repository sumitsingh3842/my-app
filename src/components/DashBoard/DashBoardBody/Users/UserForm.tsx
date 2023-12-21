import React from 'react';
import { useForm } from 'react-hook-form';
import {
  TextField,
  Button,
  Grid,
  Box,
  Typography
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
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
interface UserFormProps {
  setUserForm: (value:boolean) => void;
}

const UserForm = ({setUserForm}:UserFormProps) => {
  const { register, handleSubmit, formState } = useForm<FormData>();
  const onSubmit = async(data: FormData) => {
    console.log(data);
    setUserForm(false);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2} sx={{backgroundColor:"white",padding:"10px",borderRadius:"5px"}}>
      <Box className="organisation-form-header">
        <Typography variant="h5">Create User</Typography> 
        <CloseIcon onClick={()=>setUserForm(false)} sx={{cursor:"pointer"}}/> 
        </Box>
      <Grid item xs={12}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            {...register('name', { required: true })}
          />
        </Grid>
        <Grid item xs={12}>
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
            type='password'
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
