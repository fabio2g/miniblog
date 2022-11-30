import styles from "./Footer.module.css";

const Footer = ({ theme }) => {
    console.log("footer:", theme);
    return (
        <footer className={theme ? styles.footer : styles.footer_dark}>
            <h1>Footer</h1>
        </footer>
    );
};

export default Footer;
