import { NavLink } from 'react-router-dom';
import { Link, Stack } from '@mui/material';

export const AuthNav = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Link
        component={NavLink}
        to="/register"
        sx={{
          
          textDecoration: 'none',
          fontWeight: 700,
          color: '#2a363b',
          '&.active': {
            color: 'primary.main',
          },
        }}
      >
        Register
      </Link>
      <Link
        component={NavLink}
        to="/login"
        sx={{
          textDecoration: 'none',
          fontWeight: 700,
          color: '#2a363b',
          '&.active': {
            color: 'primary.main',
          },
        }}
      >
        Log In
      </Link>
    </Stack>
  );
};
