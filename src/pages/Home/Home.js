import styles from "./Home.module.css";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import CardPost from "../../components/CardPost/CardPost";
import Search from "../../components/Search/Search";

const Home = ({ theme }) => {
    const { documents: posts, loading, error } = useFetchDocuments("posts");

    return (
        <div className={styles.container}>
            {loading && (
                <div className={"loading"}>
                    <div className="loader"></div>
                </div>
            )}
            {!loading && <Search />}
            <div className={styles.posts}>
                {posts &&
                    posts.map((post) => (
                        <CardPost key={post.id} post={post} theme={theme} />
                    ))}
            </div>

            {error && <h3>{error}</h3>}
        </div>
    );
};

export default Home;
