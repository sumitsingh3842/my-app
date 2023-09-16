import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch,useAppSelector } from '../../../app/hooks'
import {updateToken} from '../../../features/DashBoard/userSlice'
import {getAccessToken} from "../../../axios-client/get-access-token.js";
import { getAllUsers } from "../../../axios-client/get-all-users";
const DashBoardBody = () => {
  const navigate = useNavigate();
  const dispatch=useAppDispatch();
  const { user, isAuthenticated } = useAuth0();
  const [accessToken, setAccessToken]=useState("");
  const [accessTokenFetched, setAccessTokenFetched] = useState(false);
  useEffect(() => {
    if (!accessTokenFetched && !sessionStorage.getItem('accessToken')) {
      const getToken = async () => {
        const tokenResp = await getAccessToken();
        if (!tokenResp.isError) {
            if ('accessToken' in tokenResp) {
              const token = tokenResp.accessToken;
              sessionStorage.setItem('accessToken', token);
              dispatch(updateToken(token));
              setAccessToken(token);
            }
          }
        setAccessTokenFetched(true); // Mark that the token has been fetched
      };
      getToken();
    }
  }, [accessTokenFetched]);
  const getUsers=()=>{
    navigate('/users');
  }
  return (
    isAuthenticated && user ? (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <Button variant="contained" onClick={()=>getUsers()}>All Users</Button>
        <Button variant="contained" onClick={()=>navigate('/createuser')}>Create User</Button>
        <Button variant="contained" onClick={()=>navigate('/createorg')}>Create Organisation</Button>
      </div>
    ) : (
      <div>
        <p>User is not authenticated.</p>
      </div>
    )
  );
};

export default DashBoardBody;