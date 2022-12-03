import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./CardPost.module.css";

const CardPost = ({ post }) => {
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

    return (
        <div className={styles.box_card} key={post.id}>
            <img src={post.image} alt={post.title} />
            <div className={styles.content}>
                <h2>{post.title}</h2>
                <small>
                    Postado por {post.createdBy} em {formatDatePost()}
                </small>
                <div className={styles.tags}>
                    {post.tagsArray.map((tag) => (
                        <span key={tag}>{tag}</span>
                    ))}
                </div>

                <Link to={`/post/${post.id}`}>
                    <button className="btn_success">Ver mais</button>
                </Link>
            </div>
        </div>
    );
};

export default CardPost;
