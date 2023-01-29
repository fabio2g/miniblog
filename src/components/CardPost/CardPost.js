import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./CardPost.module.css";

const CardPost = ({ post }) => {
    const theme = useContext(ThemeContext);

    const formatDatePost = () => {
        // const datePost = new Date(post.createAt.seconds * 1000)
        //     .toLocaleString()
        //     .split(" ")[0];
        function addZeroToDay(day) {
            return day <= 9 ? "0" + day : day;
        }

        const meses = [
            "Jan",
            "Fev",
            "Mar",
            "Abr",
            "Mai",
            "Jun",
            "Jul",
            "Ago",
            "Set",
            "Out",
            "Nov",
            "Dez",
        ];
        let date = new Date(post.createAt.seconds * 1000);
        let dateFormated =
            addZeroToDay(date.getDate()) +
            " " +
            meses[date.getMonth()] +
            " " +
            date.getFullYear();

        return dateFormated;
    };

    const formatedBody = () => {
        let description = post.body;

        if (description.length > 100) {
            description = description.substring(0, 100) + "...";
        }

        console.log(description);
        return description;
    };

    return (
        <div
            className={theme === "Dark" ? styles.cardDark : styles.card}
            key={post.id}
        >
            <img src={post.image} alt={post.title} />
            <div className={styles.content}>
                <small>
                    Postado por {post.createdBy} em {formatDatePost()}
                </small>
                <div className={styles.title}>
                    <h2>{post.title}</h2>
                </div>
                <div className={styles.body}>
                    <p>{formatedBody()}</p>
                </div>

                {/* <div className={styles.tags}>
                    {post.tagsArray &&
                        post.tagsArray.map((tag) => (
                            <span key={tag}>{tag}</span>
                        ))}
                </div> */}

                <Link to={`/post/${post.id}`}>
                    <button className={styles.plus}>
                        <i className="fa-solid fa-plus"></i>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default CardPost;
