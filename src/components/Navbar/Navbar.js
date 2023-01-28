import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { useAuthentication } from "../../hooks/useAuthentication";
import styles from "./Navbar.module.css";

const Navbar = (props) => {
    const [theme, setTheme] = useState(localStorage.getItem("Theme"));

    const { logout } = useAuthentication();
    const { user } = useAuthValue();

    const handleButtonClose = () => {
        if (window.confirm("Desejá realmente sair?")) {
            logout();
        }
    };

    const handleButtonTheme = () => {
        if (localStorage.getItem("Theme") == "Light") {
            localStorage.setItem("Theme", "Dark");
            setTheme(localStorage.getItem("Theme"));
        } else {
            localStorage.setItem("Theme", "Light");
            setTheme(localStorage.getItem("Theme"));
        }

        props.onThemeChange(localStorage.getItem("Theme"));
    };

    useEffect(() => {
        if (!localStorage.getItem("Theme")) {
            localStorage.setItem("Theme", "Light");
        }
    }, []);

    return (
        <nav className={theme === "Dark" ? styles.navbar_dark : styles.navbar}>
            <div className={styles.container}>
                <NavLink className={styles.brand} to={"/"}>
                    Mini<span>Blog</span>
                </NavLink>
                <ul className={styles.list_links}>
                    <li>
                        <button onClick={handleButtonTheme}>Mode</button>
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
