import css from "./Layout.module.css";
import { AppBar } from "../appBar/AppBar";

export const Layout = ({ children }) => {
    return (
        <main className={css.container}> <AppBar />{children}</main>
       
    )
}