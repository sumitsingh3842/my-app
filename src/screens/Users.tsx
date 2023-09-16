import React, { useEffect, useState } from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { getAllUsers } from '../axios-client/get-all-users';

type User = {
  name: string;
  email: string;
};

function Users() {
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
          }
        }
        setUsersFetched(true);
      };
      getToken();
    }
  }, [usersFetched]);

  return (
    <Grid container spacing={2}>
      {users.map((user, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Paper elevation={3} style={{ padding: '16px' }}>
            <Typography variant="h6">{user.name}</Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {user.email}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

export default Users;
