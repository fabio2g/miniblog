import { useState } from "react";
import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocument } from "../../hooks/useFetchDocument";
import styles from "./InteractionBar.module.css";

const InteractionBar = ({ post }) => {
    const [like, setLike] = useState(false);
    const [userLike, setUserLike] = useState([]);

    const { user } = useAuthValue();
    // const { document } = useFetchDocument("post", post.id);

    const handleOnClickLike = () => {
        setUserLike({
            uid: user.uid,
            name: user.displayName,
        });
        console.log(userLike.length);


        
        // console.log("Like", { userId: user.uid, name: user.displayName });
    };

    return (
        <div className={styles.container}>
            <div className={styles.like}>
                {like ? (
                    <i className="fa-solid fa-heart">
                        <span>{post.like}</span>
                    </i>
                ) : (
                    <i
                        className="fa-regular fa-heart"
                        onClick={handleOnClickLike}
                    >
                        <span>{post.like}</span>
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
