import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import styles from "./Home.module.css";

const Home = () => {
    const { documents: posts, loading, error } = useFetchDocuments("posts");

    console.log(posts);

    return (
        <div>
            {posts &&
                posts.map((post) => (
                    <div key={post.id}>
                        <img src={post.image} alt={post.title} />
                        <h3>{post.title}</h3>
                        <p>{post.tagsArray}</p>
                    </div>
                ))}
        </div>
    );
};

export default Home;
