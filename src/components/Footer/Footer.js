import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./Footer.module.css";

const Footer = () => {
    const theme = useContext(ThemeContext);

    return (
        <footer
            className={theme === "Light" ? styles.footer : styles.footer_dark}
        >
            <h3>Compartilhe o seu conhecimento em tecnologia aqui!</h3>
            <p>Mini Blog &copy; 2022</p>
            <div className={styles.social_media}>
                <Link>
                    <i className="fa-brands fa-github"></i>
                </Link>
                <Link>
                    <i className="fa-brands fa-linkedin"></i>
                </Link>
                <Link>
                    <i className="fa-brands fa-instagram"></i>
                </Link>
                <Link>
                    <i className="fa-brands fa-codepen"></i>
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
