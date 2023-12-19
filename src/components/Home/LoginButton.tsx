import React from "react";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const LoginButton = () => {
  const navigate = useNavigate();
  const loginWithRedirectFunc = async() => {
    navigate('/my-app/dashboard')
    
  }
  return <Button onClick={() => loginWithRedirectFunc()} color="inherit">Login</Button>
};

export default LoginButton;