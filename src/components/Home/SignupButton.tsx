import React from "react";
import Button from '@mui/material/Button';

const SignupButton = () => {
    const signUpWithRedirect = async() => {
        window.location.href = 'https://codedino.b2clogin.com/codedino.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_User_Signup_Flow&client_id=051058bf-c135-45b9-965b-749b9f2f2438&nonce=defaultNonce&redirect_uri=https%3A%2F%2F5m1no7sqj9.execute-api.us-east-1.amazonaws.com%2Fdev%2Fsignup&scope=openid&response_type=code&prompt=login&code_challenge=G62-a46sshEMGy46KHWN5NgS5CV1qd73PD3-M31BI3U&code_challenge_method=S256';
      }
    
      return <Button onClick={() => signUpWithRedirect()} color="inherit">Sign up</Button>;
};

export default SignupButton;