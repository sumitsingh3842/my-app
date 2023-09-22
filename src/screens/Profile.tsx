import React from "react";
import { useAuth0,withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../components/Loading/Loading";

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && user ? (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    ) : (
      <div>
        <p>User is not authenticated.</p>
      </div>
    )
  );
};
export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <Loading />,
});