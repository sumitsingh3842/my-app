import React, { useEffect, useState } from 'react';
import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material';
import ReactLoading from 'react-loading';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import {getAllOrgs} from '../../../axios-client/get-all-organisation';
type Organisation = {
  name: string;
  display_name: string;
};
interface OrganisationProps {
  setLoading: (loading: boolean) => void;
}
function OrganisationPage({ setLoading }: OrganisationProps) {
  const navigate=useNavigate();
  const { user, isAuthenticated  } = useAuth0();
  const [orgsFetched, setOrgsFetched] = useState(false);
  const [orgs, setOrgs] = useState<Organisation[]>([]);
  async function getOrgs(){
    const orgsResp = await getAllOrgs(user?.sub);
    if (!orgsResp.isError) {
      if ('data' in orgsResp) {
        const fetchedOrgs = orgsResp.data as Organisation[];
        setOrgs(fetchedOrgs);
        setLoading(false);
      }
    }
    setOrgsFetched(true);
  }
  useEffect(() => {
    if (isAuthenticated) {
      console.log("UserId",user?.sub);
      getOrgs();
    }
  }, [orgsFetched, isAuthenticated]);

  return (
    <Grid>
      <ReactLoading type="spinningBubbles" color="#000" className="loading" 
      // @ts-ignore
      style={{ position: 'absolute', top: '50%', left: '50%' }} 
      // @ts-ignore
       height={667} width={375} />
      <Container sx={{ marginTop: '1%', marginBottom: '1%' }}>
        <Grid >
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h3">Organisations</Typography>
          <Button variant="contained" color="primary" onClick={()=>navigate('/organisation/create')}>
            + Create Organisation
          </Button>
        </Box>
        </Grid>
        <Grid>
        {orgs.length === 0 ? (
        // Display a message when there are no users
        <Typography variant="subtitle1" color="textSecondary">
          No Organisations available.
        </Typography>
      ) : (
        // Map and display users if the users array is not empty
        orgs.map((org, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper elevation={3} style={{ padding: '16px' }}>
              <Typography variant="h6">{org.name}</Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {org.display_name}
              </Typography>
            </Paper>
          </Grid>
        ))
      )}
        </Grid>
      </Container>
    </Grid>
  );
}

export default OrganisationPage;
