import styles from "./Post.module.css";
import { Link, useParams } from "react-router-dom";
import { useFetchDocument } from "../../hooks/useFetchDocument";

const Post = () => {
    const { id: postId } = useParams();

    const {
        document: post,
        loading,
        error,
    } = useFetchDocument("posts", postId);

    return (
        <div className={styles.box_post}>
            {loading ? (
                <div className={styles.loading}>
                    <div class="loader"></div>
                </div>
            ) : (
                <>
                    <img src={post.image} alt={post.title} />
                    <h1>{post.title}</h1>
                    <small>Postado por {post.createdBy} em ...</small>
                    <p>{post.body}</p>
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
