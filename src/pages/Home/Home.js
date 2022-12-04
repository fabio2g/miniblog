import styles from "./Home.module.css";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import CardPost from "../../components/CardPost/CardPost";

const Home = ({ theme }) => {
    const { documents: posts, loading, error } = useFetchDocuments("posts");

    return (
        <div className={styles.box_home}>
            {loading && (
                <div className={styles.loading}>
                    <div className="loader"></div>
                </div>
            )}
            {posts &&
                posts.map((post) => (
                    <CardPost key={post.id} post={post} theme={theme} />
                ))}
            {error && <h3>{error}</h3>}
        </div>
    );
};

export default Home;
