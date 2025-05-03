import css from "./AppBar.module.css";
import { Navigation } from "../navigation/Navigation";
import { UserMenu } from "../userMenu/UserMenu";
import { AuthNav } from "../authNav/AuthNav";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/authSelectors";


export const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
        <header className={css.header}>
            <Navigation />
            {isLoggedIn ?  <UserMenu /> :  <AuthNav/>}
        </header>
    )
}