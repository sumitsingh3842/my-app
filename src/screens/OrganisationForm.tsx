import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import {
  TextField,
  Checkbox,
  Button,
  FormControlLabel,
  Grid,
} from '@mui/material';
import { createOrganisation  } from '../axios-client/create-organisation';
import { addUserOrganisation } from '../axios-client/add-user-organisation';
import { createAdminRole,createUserRole } from '../axios-client/create-roles';
import { createPermissions } from '../axios-client/create-permissions';
interface UserFormProps {
  onSubmit: (data: FormData) => void;
}

interface FormData {
  name:string,
  display_name: string;
}

const OrganisationForm = () => {
  const {user}=useAuth0();
  const navigate = useNavigate();
  const token=sessionStorage.getItem('accessToken');
  console.log(token);
  
  const { register, handleSubmit, formState } = useForm<FormData>();
  const onSubmit = async(data: FormData) => {
    console.log(data);
    const createOrgResp= await createOrganisation(data);
    if(!createOrgResp.isError && createOrgResp.data && createOrgResp.data.id){
      const orgId=createOrgResp.data.id;
      const userId=user?.sub;
      const addUserResp= await addUserOrganisation(orgId,[userId]);
      await createPermissions(orgId,createOrgResp.data.name)
      setTimeout(()=>{
        navigate('/dashboard');
      },2000)
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
