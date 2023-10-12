import React, { useEffect, useState } from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { useAuth0 } from "@auth0/auth0-react";
import { getAllOrgs } from '../../../../axios-client/get-all-organisation';
import { setOrganisation } from '../../../../features/DashBoard/dashBoardSlice';
import '../../../../styles/components/DashBoard/DashBoardBody/OrganisationPage.css';
import { usePromiseTracker,trackPromise  } from 'react-promise-tracker';
import ReactLoading from 'react-loading';

type Organisation = {
  organisationId: number;
  organisationName: string;
};

function OrganisationPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { promiseInProgress } = usePromiseTracker(); 
  const organisations = useAppSelector((state) => state.dashboard.organisations);
  const { user, isAuthenticated } = useAuth0();
  const [orgForm, setOrgForm] = useState(false);
  const [orgsFetched, setOrgsFetched] = useState(false);

  async function getOrgs() {
    trackPromise(
      getAllOrgs(user?.email)
        .then((orgsResp) => {
          if (!orgsResp.isError) {
            if ('data' in orgsResp) {
              const fetchedOrgs = orgsResp.data as Organisation[];
              dispatch(setOrganisation(fetchedOrgs));
            }
          }
          setOrgsFetched(true);
        })
    );
  }

  useEffect(() => {
    if (isAuthenticated) {
      console.log("UserId", user?.sub);
      getOrgs();
    }
  }, [isAuthenticated]);

  useEffect(() => {
    console.log(organisations); // This will log the updated organisations
  }, [organisations]);
  const createOrganisation = () => {
    navigate('/create-organisation');
  }

  return (
    <Grid className="organisationPage">
            <Box className='organisationHeaderDiv'>
              <Typography variant="h3" className='organisationHeader'>Organisations</Typography>
              <IconButton onClick={() => createOrganisation()} className="profileIcon">
                  <AddCircleIcon fontSize='large'  />
                </IconButton>
            </Box>
            {promiseInProgress ? ( // Display loader if promise is in progress
            <Grid className='organisationPromiseGrid'>
              <ReactLoading
                type="spin"
                color="#1976d2"
                className="loading"
              />
              </Grid>
            ) : (
              organisations.length === 0 ? (
                <Grid className='organisationPromiseGrid'>
                <Typography color="textSecondary">
                  No Organisations available.
                </Typography>
                </Grid>
              ) : (
                <Grid className='organisationGrid'>
                <Grid className="organisationItemGrid">
                  {organisations.map((org) => (
                    <Grid key={org.organisationId} className="organisationItem">
                      <Typography variant="h6" className='organisationName'>
                        {org.organisationName}
                      </Typography>
                      <Typography variant="subtitle1">
                        {org.organisationId}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
                </Grid>
              )
            )}
    </Grid>
  );
  
}

export default OrganisationPage;
