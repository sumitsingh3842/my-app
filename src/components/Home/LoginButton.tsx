import React from "react";
import Button from '@mui/material/Button';

const LoginButton = () => {
  const loginWithRedirectFunc = async() => {
    window.location.href = 'https://codedino.b2clogin.com/codedino.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_Login_Flow&client_id=051058bf-c135-45b9-965b-749b9f2f2438&nonce=defaultNonce&redirect_uri=https%3A%2F%2Fapi.codedino.io%2Fapis%2Flogin&scope=openid&response_type=code&prompt=login&code_challenge=G62-a46sshEMGy46KHWN5NgS5CV1qd73PD3-M31BI3U&code_challenge_method=S256';
    
  }
  return <Button onClick={() => loginWithRedirectFunc()} color="inherit">Login</Button>
};

export default LoginButton;