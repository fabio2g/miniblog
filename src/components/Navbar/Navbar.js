import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { useAuthentication } from "../../hooks/useAuthentication";
import styles from "./Navbar.module.css";

const Navbar = ({ themeState }) => {
    const [theme, setTheme] = useState(false);

    const { logout } = useAuthentication();
    const { user } = useAuthValue();

    const handleButtonClose = () => {
        if (window.confirm("Desejá realmente sair?")) {
            logout();
        }
    };

    const handleOnClick = () => {
        setTheme(!theme);
        themeState({ theme });
    };

    console.log(theme);

    return (
        <nav className={theme ? styles.navbar_dark : styles.navbar}>
            <div className={styles.container}>
                <NavLink className={styles.brand} to={"/"}>
                    Mini<span>Blog</span>
                </NavLink>
                <ul className={styles.list_links}>
                    <li>
                        <input type="checkbox" onClick={handleOnClick} />
                    </li>
                    {!user && (
                        <li>
                            <NavLink to={"/login"}>Entrar</NavLink>
                        </li>
                    )}
                    <li>
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/post/create"}>Novo post</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/about"}>Sobre</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/dashboard"}>Dashboard</NavLink>
                    </li>
                    {user && (
                        <li>
                            <NavLink to={"#"} onClick={handleButtonClose}>
                                Sair
                            </NavLink>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
