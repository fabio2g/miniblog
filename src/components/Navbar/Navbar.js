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
        if (localStorage.getItem("Theme") === "Light") {
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
        <nav className={theme === "Dark" ? styles.navbarDark : styles.navbar}>
            <div className={styles.container}>
                <NavLink className={styles.brand} to={"/"}>
                    Mini<span>Blog</span>
                </NavLink>
                <ul className={styles.links}>
                    {!user && (
                        <li>
                            <NavLink to={"/login"}>Entrar</NavLink>
                        </li>
                    )}
                    <li>
                        <NavLink to={"/"}>Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/post/create"}>Postar</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/dashboard"}>Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/about"}>Sobre</NavLink>
                    </li>

                    {user && (
                        <li>
                            <NavLink to={"#"} onClick={handleButtonClose}>
                                Sair
                            </NavLink>
                        </li>
                    )}
                    <li className={styles.themeMode}>
                        <button onClick={handleButtonTheme}>
                            {theme === "Dark" ? (
                                <span className={styles.iconMoon}>
                                    <i className="fa-regular fa-moon"></i>
                                </span>
                            ) : (
                                <span className={styles.iconSun}>
                                    <i className="fa-regular fa-sun"></i>
                                    {/* <i class="fa-solid fa-sun"></i> */}
                                </span>
                            )}
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
