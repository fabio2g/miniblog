import { useParams } from "react-router-dom";
import styles from "./Post.module.css";

const Post = () => {
    const { id: postId } = useParams();

    return <div>Id: {postId}</div>;
};

export default Post;
