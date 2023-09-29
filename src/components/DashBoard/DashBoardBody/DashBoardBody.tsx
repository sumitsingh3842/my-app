import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import DashBoardMenuBar from "../DashBoardMenuBar";
import { useAppDispatch,useAppSelector } from '../../../app/hooks'
import { Backdrop, CircularProgress } from "@mui/material";
import OrganisationPage from "./Orgainsation/OrganisationPage";
import Users from "./Users/UsersPage";
interface DashBoardBodyProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}
const DashBoardBody: React.FC<DashBoardBodyProps> = ({ isDarkMode, toggleDarkMode }) => {
  const dispatch=useAppDispatch();
  const { user, isAuthenticated,getIdTokenClaims  } = useAuth0();
  const [activeBar,setActiveBar]=useState("organisation");
  const [loading,setLoading]=useState(true);
  useEffect(() => {
    if (isAuthenticated) {
      if(user?.sub)
      sessionStorage.setItem('userId',user?.sub)
      getIdTokenClaims()
        .then((claims) => {
          console.log(claims?.__raw);
          if(claims)
          sessionStorage.setItem('idToken',claims.__raw)
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
        <DashBoardMenuBar activeTab={activeBar} onTabChange={setActiveBar} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}   />
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