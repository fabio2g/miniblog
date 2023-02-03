import styles from "./Home.module.css";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import CardPost from "../../components/CardPost/CardPost";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ theme }) => {
    const [search, setSearch] = useState("");

    const { documents: posts, loading, error } = useFetchDocuments("posts");

    let navegate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (search) return navegate(`/search?query=${search}`);
    };

    return (
        <div className={styles.container}>
            {loading && (
                <div className={"loading"}>
                    <div className="loader"></div>
                </div>
            )}
            {!loading && (
                <>
                    {/* <h1>Veja os posts mais recentes</h1> */}
                    <form onSubmit={handleSubmit} className={styles.search}>
                        <button>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                        <input
                            type="search"
                            name="search"
                            placeholder="Pesquise postagens por palavra chave..."
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </form>
                </>
            )}
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
