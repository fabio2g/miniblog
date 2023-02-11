import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import InteractionBar from "../InteractionBar/InteractionBar";
import styles from "./CardPost.module.css";

const CardPost = ({ post }) => {
    const theme = useContext(ThemeContext);
    // const formatDatePost = () => {
    //     // const datePost = new Date(post.createAt.seconds * 1000)
    //     //     .toLocaleString()
    //     //     .split(" ")[0];
    //     function addZeroToDay(day) {
    //         return day <= 9 ? "0" + day : day;
    //     }

    //     const meses = [
    //         "Jan",
    //         "Fev",
    //         "Mar",
    //         "Abr",
    //         "Mai",
    //         "Jun",
    //         "Jul",
    //         "Ago",
    //         "Set",
    //         "Out",
    //         "Nov",
    //         "Dez",
    //     ];
    //     let date = new Date(post.createAt.seconds * 1000);
    //     let dateFormated =
    //         addZeroToDay(date.getDate()) +
    //         " " +
    //         meses[date.getMonth()] +
    //         " " +
    //         date.getFullYear();

    //     return dateFormated;
    // };

    const formatedBody = () => {
        let description = post.body;

        if (description.length > 200) {
            description = description.substring(0, 200) + "[...]";
        }

        return description;
    };

    return (
        <div
            className={theme === "Dark" ? styles.cardDark : styles.card}
            key={post.id}
        >
            <div className={styles.image}>
                <Link to={`/post/${post.id}`}>
                    <img src={post.image} alt={post.title} />
                </Link>
            </div>
            <div className={styles.content}>
                <Link to={`/post/${post.id}`}>
                    <div className={styles.title}>
                        <h2>{post.title}</h2>
                    </div>
                    <div className={styles.body}>
                        <p>{formatedBody()}</p>
                    </div>
                </Link>
                <InteractionBar post={post} />
            </div>
        </div>
    );
};

export default CardPost;
