import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import OrganisationPage from "./Orgainsation/OrganisationPage";
import '../../../styles/components/DashBoard/DashBoardBody/DashBoardBody.css'
const DashBoardBody= () => {
  const { user, isAuthenticated,getIdTokenClaims  } = useAuth0();
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
  return (
    isAuthenticated && user ? (
      <OrganisationPage/>
    ) : (
      <div>
        <p>User is not authenticated.</p>
      </div>
    )
  );
};

export default DashBoardBody;