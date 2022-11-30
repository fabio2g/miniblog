import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = ({ theme }) => {
    console.log("footer:", theme);
    return (
        <footer className={theme ? styles.footer : styles.footer_dark}>
            <h3>Compartilhe o seu conhecimento em tecnologia aqui!</h3>
            <p>Mini Blog &copy; 2022</p>
            <div className={styles.social_media}>
                <Link>
                    <i class="fa-brands fa-github"></i>
                </Link>
                <Link>
                    <i class="fa-brands fa-linkedin"></i>
                </Link>
                <Link>
                    <i class="fa-brands fa-instagram"></i>
                </Link>
                <Link>
                    <i class="fa-brands fa-codepen"></i>
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
