import React, { useEffect, useState } from 'react';
import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material';
import { getAllUsers } from '../../../axios-client/get-all-users';
import ReactLoading from 'react-loading';

type User = {
  name: string;
  email: string;
};
interface UsersProps {
  setLoading: (loading: boolean) => void;
}

function Users({ setLoading }: UsersProps) {
  const [usersFetched, setUsersFetched] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    if (!usersFetched) {
      const getToken = async () => {
        const usersResp = await getAllUsers();
        if (!usersResp.isError) {
          if ('data' in usersResp) {
            const fetchedUsers = usersResp.data as User[];
            setUsers(fetchedUsers);
            setLoading(false);
          }
        }
        setUsersFetched(true);
      };
      getToken();
    }
  }, [usersFetched]);

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
          <Typography variant="h3">Users</Typography>
          <Button variant="contained" color="primary">
            + Create User
          </Button>
        </Box>
        </Grid>
        <Grid>
        {users.length === 0 ? (
        // Display a message when there are no users
        <Typography variant="subtitle1" color="textSecondary">
          No users available.
        </Typography>
      ) : (
        // Map and display users if the users array is not empty
        users.map((user, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper elevation={3} style={{ padding: '16px' }}>
              <Typography variant="h6">{user.name}</Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {user.email}
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

export default Users;
