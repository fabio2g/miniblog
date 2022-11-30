import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = ({ themeState }) => {
    const [theme, setTheme] = useState(false);

    const handleOnChange = () => {
        setTheme(!theme);
        themeState({ theme });
    };

    return (
        <nav className={theme ? styles.navbar_dark : styles.navbar}>
            <div className={styles.container}>
                <div className={styles.links}>
                    <NavLink className={styles.brand} to={"/"}>
                        Mini<span>Blog</span>
                    </NavLink>
                    <ul>
                        <li>
                            <NavLink to={"/login"}>Entrar</NavLink>
                        </li>
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
                    </ul>
                </div>
                <div>
                    <label className={styles.switch}>
                        <input
                            type="checkbox"
                            checked={theme}
                            onChange={handleOnChange}
                        />
                        <span className={styles.slider}></span>
                    </label>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
