import { useDispatch, useSelector } from "react-redux";
import css from "./UserMenu.module.css";
import { selectUser } from "../../redux/auth/authSelectors";
import { logOut } from "../../redux/auth/authOperation";
import Button from '@mui/material/Button';


export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);


    return (
        <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name} </p>
      <Button variant="contained" type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </div>
    )
}