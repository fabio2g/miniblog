import styles from "./Home.module.css";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import CardPost from "../../components/CardPost/CardPost";

const Home = () => {
    const { documents: posts, loading, error } = useFetchDocuments("posts");

    return (
        <div className={styles.box_home}>
            {posts &&
                posts.map((post) => <CardPost key={post.id} post={post} />)}
        </div>
    );
};

export default Home;
