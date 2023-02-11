import { useEffect, useState } from "react";
import { useAuthValue } from "../../context/AuthContext";
import { useUpdateDocument } from "../../hooks/useUpdateDocument";
import styles from "./InteractionBar.module.css";

const InteractionBar = ({ post }) => {
    const [addLikePost, setAddLikePost] = useState({});
    const [userLiked, setUserLiked] = useState(false);

    const { user } = useAuthValue();
    const { updateLike } = useUpdateDocument("posts", post.id);

    const likeList = JSON.parse(post.like);

    /**
     * Monta um objeto com as referências do usuário.
     */
    const handleOnClickLike = () => {
        setAddLikePost({
            uid: user.uid,
            name: user.displayName,
        });

        setUserLiked(true);
    };

    /**
     * Verifica se o objeto está vazio.
     * @param {} element
     * @returns {boolean}
     */
    function isObjectEmpty(element) {
        return Object.getOwnPropertyNames(element).length === 0;
    }

    /**
     * Registra a curtida do usuário.
     */
    useEffect(() => {
        if (isObjectEmpty(addLikePost)) return;
        updateLike(addLikePost);
    }, [addLikePost, updateLike]);

    /**
     * Verifica se o usuário deu like no post corrente.
     */
    useEffect(() => {
        if (!user) return;
        const listIdUsers = likeList.map((user) => user.uid);
        if (listIdUsers.includes(user.uid)) return () => setUserLiked(true);
    }, [user, likeList]);

    return (
        <div className={styles.container}>
            <div className={styles.like}>
                {userLiked ? (
                    <i className="fa-solid fa-heart">
                        <span>{likeList.length}</span>
                    </i>
                ) : (
                    <i
                        className="fa-regular fa-heart"
                        onClick={handleOnClickLike}
                    >
                        <span>{likeList.length}</span>
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

// [{"uid":"PAwBJe6fCaV2LG9leNemQLzNvnF3","name":"Jonh"}]
