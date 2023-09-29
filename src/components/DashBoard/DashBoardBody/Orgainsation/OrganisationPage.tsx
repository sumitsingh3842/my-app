import React, { useEffect, useState } from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { useAuth0 } from "@auth0/auth0-react";
import { getAllOrgs } from '../../../../axios-client/get-all-organisation';
import { setOrganisation } from '../../../../features/DashBoard/dashBoardSlice';
import '../../../../styles/components/DashBoard/DashBoardBody/OrganisationPage.css';
import OrganisationForm from './OrganisationForm';
import { usePromiseTracker,trackPromise  } from 'react-promise-tracker';
import ReactLoading from 'react-loading';

type Organisation = {
  organisationId: number;
  organisationName: string;
};

interface OrganisationProps {
  setLoading: (loading: boolean) => void;
}

function OrganisationPage({ setLoading }: OrganisationProps) {
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
              setLoading(false);
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

  return (
    <Grid className="organisationPage">
      <Container>
        {orgForm && (
          <Grid className='organisationFormDiv'>
            <OrganisationForm setOrgForm={setOrgForm} />
          </Grid>
        )}
        <Container sx={{ padding: '1%' }}>
          <Grid>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="h3">Organisations</Typography>
              <Button variant="contained" color="primary" onClick={() => setOrgForm(true)}>
                + Create Organisation
              </Button>
            </Box>
          </Grid>
          <Grid className='organisationGrid'>
            {promiseInProgress ? ( // Display loader if promise is in progress
              <ReactLoading
                type="spin"
                color="#1976d2"
                className="loading"
              />
            ) : (
              organisations.length === 0 ? (
                <Typography color="textSecondary">
                  No Organisations available.
                </Typography>
              ) : (
                <Grid className="organisationItemGrid">
                  {organisations.map((org) => (
                    <Grid key={org.organisationId} className="organisationItem">
                      <Typography variant="h6" key={org.organisationId}>
                        {org.organisationName}
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        {org.organisationName}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              )
            )}
          </Grid>
        </Container>
      </Container>
    </Grid>
  );
  
}

export default OrganisationPage;
