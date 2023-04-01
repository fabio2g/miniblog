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
                <div className={styles.user}>
                    <div className={styles.imgProfile}>
                        <img
                            src="https://images.unsplash.com/photo-1499229694635-fc626e0d9c01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fHByb2ZsZSUyMHdvbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                            alt="Woman"
                        />
                    </div>
                    <div className={styles.salutation}>
                        <span>Bem vindo(a),</span>
                        <span>Jane Doe</span>
                    </div>
                </div>

                <div className={styles.links}>
                    <ul>
                        {!user && (
                            <li>
                                <NavLink to={"/login"}>ENTRAR</NavLink>
                            </li>
                        )}
                        <li>
                            <NavLink to={"/"}>INICIO</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/post/create"}>POSTAR</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/dashboard"}>DASHBOARD</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/about"}>SOBRE</NavLink>
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

                <div className={styles.buttonTheme}>
                    <button onClick={handleButtonTheme}>
                        {theme === "Dark" ? (
                            <span className={styles.iconMoon}>
                                <i className="fa-regular fa-moon"></i>
                            </span>
                        ) : (
                            <span className={styles.iconSun}>
                                <svg
                                    width="38"
                                    height="38"
                                    viewBox="0 0 38 38"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clip-path="url(#clip0_6_92)">
                                        <path
                                            d="M19 26.9167C23.3722 26.9167 26.9166 23.3723 26.9166 19C26.9166 14.6278 23.3722 11.0833 19 11.0833C14.6277 11.0833 11.0833 14.6278 11.0833 19C11.0833 23.3723 14.6277 26.9167 19 26.9167Z"
                                            stroke="#A7880C"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M19 1.58334V4.75001"
                                            stroke="#A7880C"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M19 33.25V36.4167"
                                            stroke="#A7880C"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M6.68164 6.68167L8.92997 8.93"
                                            stroke="#A7880C"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M29.07 29.07L31.3183 31.3183"
                                            stroke="#A7880C"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M1.58331 19H4.74998"
                                            stroke="#A7880C"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M33.25 19H36.4167"
                                            stroke="#A7880C"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M6.68164 31.3183L8.92997 29.07"
                                            stroke="#A7880C"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M29.07 8.93L31.3183 6.68167"
                                            stroke="#A7880C"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_6_92">
                                            <rect
                                                width="38"
                                                height="38"
                                                fill="white"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </span>
                        )}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
