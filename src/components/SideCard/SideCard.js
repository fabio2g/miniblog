import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./SideCard.module.css";

const SideCard = ({ post }) => {
    const theme = useContext(ThemeContext);

    return (
        <Link to={`/post/${post.id}`}>
            <div
                className={
                    theme === "Dark" ? styles.containerDark : styles.container
                }
            >
                <img src={post.image} alt={""} />
                <div className={styles.content}>
                    <h2>{post.title}</h2>
                </div>
            </div>
        </Link>
    );
};

export default SideCard;
