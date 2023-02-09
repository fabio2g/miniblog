import { useEffect, useState } from "react";
import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocument } from "../../hooks/useFetchDocument";
import { useUpdateDocument } from "../../hooks/useUpdateDocument";
import styles from "./InteractionBar.module.css";

const InteractionBar = ({ post }) => {
    const [likePost, setlikePost] = useState();
    const [userLiked, setUserliked] = useState(false);

    const { user } = useAuthValue();
    const { updateLike } = useUpdateDocument("posts", post.id);

    const totalLike = JSON.parse(post.like);

    const handleOnClicklikePost = () => {
        setlikePost({
            uid: user.uid,
            name: user.displayName,
        });

        setUserliked(true);
    };

    // Atualiza like
    useEffect(() => {
        updateLike(likePost);
    }, [likePost]);

    // Verifica se usuário deu like
    useEffect(() => {
        const idUser = totalLike.map((e) => e.uid);

        if (idUser.includes(user.uid)) return () => setUserliked(true);
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.likePost}>
                {userLiked ? (
                    <i className="fa-solid fa-heart">
                        <span>{totalLike.length}</span>
                    </i>
                ) : (
                    <i
                        className="fa-regular fa-heart"
                        onClick={handleOnClicklikePost}
                    >
                        <span>{totalLike.length}</span>
                    </i>
                )}
            </div>
            <div className={styles.view}>
                <i className="fa-regular fa-eye">
                    <span>{post.view}</span>
                </i>
            </div>
        </div>
    );
};

export default InteractionBar;
