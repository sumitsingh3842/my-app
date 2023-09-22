import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from '@mui/material/Button';
import DashBoardMenuBar from "../DashBoardMenuBar";
import { useAppDispatch,useAppSelector } from '../../../app/hooks'
import {updateToken} from '../../../features/DashBoard/userSlice'
import {getAccessToken} from "../../../axios-client/get-access-token.js";
import { getAllUsers } from "../../../axios-client/get-all-users";
import { Backdrop, CircularProgress } from "@mui/material";
import OrganisationPage from "./OrganisationPage";
import Users from "./Users";
const DashBoardBody = () => {
  const dispatch=useAppDispatch();
  const { user, isAuthenticated,getIdTokenClaims  } = useAuth0();
  const [activeBar,setActiveBar]=useState("organisation");
  const [accessToken, setAccessToken]=useState("");
  const [loading,setLoading]=useState(true);
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
  useEffect(() => {
    if (isAuthenticated) {
      console.log("UserId",user?.sub);
      getIdTokenClaims()
        .then((claims) => {
          console.log(claims?.__raw);
          if(claims)
          sessionStorage.setItem('userId',claims.__raw)
        })
        .catch((error) => {
          console.error('Error getting ID token claims:', error);
        });
    }
  }, [getIdTokenClaims, isAuthenticated]);
  const renderContent = () => {
    if (activeBar === 'organisation') {
      return <OrganisationPage setLoading={setLoading}/>;
    } else if (activeBar === 'users') {
      return <Users setLoading={setLoading}/>;
    }
    // Add more conditions for other tabs if needed
  };
  return (
    isAuthenticated && user ? (
      <div>
        <DashBoardMenuBar activeTab={activeBar} onTabChange={setActiveBar}   />
        {renderContent()}
      </div>
    ) : (
      <div>
        <Backdrop
  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
  open
>
  <CircularProgress color="inherit" />
</Backdrop>
        <p>User is not authenticated.</p>
      </div>
    )
  );
};

export default DashBoardBody;