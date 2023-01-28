import styles from "./Post.module.css";
import { Link, useParams } from "react-router-dom";
import { useFetchDocument } from "../../hooks/useFetchDocument";
import { useState } from "react";
import { useEffect } from "react";

const Post = () => {
    const [content, setContent] = useState("");

    const { id: postId } = useParams();

    const {
        document: post,
        loading,
        error,
    } = useFetchDocument("posts", postId);

    function formatText(text) {
        if (typeof text === "string") {
            const formattedText = text.replace(/\n\n/g, "<br><br>");
            return { __html: formattedText };
        } else {
            return { __html: "" };
        }
    }

    useEffect(() => {
        setContent(post.body);

        console.log(content)
    }, [post.body, content]);

    return (
        <div className={styles.box_post}>
            {loading ? (
                <div className={styles.loading}>
                    <div className="loader"></div>
                </div>
            ) : (
                <>
                    <img src={post.image} alt={post.title} />
                    <h1>{post.title}</h1>
                    <small>Postado por {post.createdBy} em ...</small>
                    <div dangerouslySetInnerHTML={formatText(content)} />
                    <div>
                        {post.tagsArray &&
                            post.tagsArray.map((tag) => (
                                <span key={tag}>{tag}</span>
                            ))}
                    </div>
                </>
            )}
            {error && (
                <div className={styles.box_error}>
                    <h3>
                        Ouve um erro inesperado, por favor tente novamente mais
                        tarde.
                    </h3>
                    <Link to={"/"}>
                        <button className="btn_success">Voltar</button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Post;
