import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
    const [darkMode] = useState(false);

    return (
        <nav className={darkMode ? styles.navbar_dark : styles.navbar}>
            <div className={styles.container}>
                <div className={styles.links}>
                    <NavLink className={styles.brand} to={"/"}>
                        Mini<span>Blog</span>
                    </NavLink>
                    <ul>
                        <li>
                            <NavLink to={"/"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/"}>Sobre</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/"}>Novo Post</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/"}>Dashboard</NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <input type="checkbox" /> Dark Mode
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
