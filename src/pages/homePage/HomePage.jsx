import { selectIsLoggedIn } from "../../redux/auth/authSelectors";
import css from "./HomePage.module.css";
import { useSelector } from "react-redux";
import { Button, Typography, Paper, Box} from "@mui/material";
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import SecurityIcon from '@mui/icons-material/Security';
import { Link as RouterLink } from 'react-router-dom';
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';

export default function HomePage() {

  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
   
    <div className={css.container}>
      <h1>
          Smart<span> Contacts</span> <PermContactCalendarOutlinedIcon color="#1565c0"/>
      </h1>
      <h2>Organize your contacts simply and safely. Save, edit and delete contacts in one click. Try now!</h2>
      <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 280,
          height: 128,
        },
      }}
    >
        <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
          <ContactPhoneIcon fontSize="large" />
        <Typography variant="h6">Easy Contact Management</Typography>
        <Typography variant="body2">Add, edit and delete in a few clicks.</Typography>
        </Paper>
        <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
          <SecurityIcon fontSize="large" />
        <Typography variant="h6">Secure Storage</Typography>
        <Typography variant="body2">Your contacts are safe and private.</Typography>
        </Paper>
      </Box>
      {isLoggedIn ?
      <Button variant="outlined" component={RouterLink} to='/contacts'>To contacts</Button> :
      <Button variant="contained" component={RouterLink} to='/register'>Start</Button>}
        
    </div>
  );
}

