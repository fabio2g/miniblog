import styles from "./Home.module.css";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import CardPost from "../../components/CardPost/CardPost";
import Search from "../../components/Search/Search";
import SideBar from "../../components/SideBar/SideBar";

const Home = ({ theme }) => {
    const { documents: posts, loading, error } = useFetchDocuments("posts");

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <SideBar />
                <div className={styles.content}>
                    {loading && (
                        <div className={"loading"}>
                            <div className="loader"></div>
                        </div>
                    )}
                    <div className={styles.posts}>
                        {posts &&
                            posts.map((post) => (
                                <CardPost
                                    key={post.id}
                                    post={post}
                                    theme={theme}
                                />
                            ))}
                    </div>

                    {error && <h3>{error}</h3>}
                </div>
            </div>
        </div>
    );
};

export default Home;
