import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Link, Stack } from '@mui/material';
import { selectIsLoggedIn } from "../../redux/auth/authSelectors";

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <Stack direction="row" spacing={2}>
        <Link
          component={NavLink}
          to="/"
          sx={{
            padding: '12px',
          textDecoration: 'none',
          fontWeight: 700,
          color: '#2a363b',
          '&.active': {
            color: 'primary.main',
          },
          }}
        >
          Home
        </Link>

        {isLoggedIn && (
          <Link
            component={NavLink}
            to="/contacts"
            sx={{
              padding: '12px',
          textDecoration: 'none',
          fontWeight: 700,
          color: '#2a363b',
          '&.active': {
            color: 'primary.main',
          },
            }}
          >
            Contacts
          </Link>
        )}
      </Stack>
    </nav>
  );
};
