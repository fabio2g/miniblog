import styles from "./Search.module.css";
import { useQuery } from "../../hooks/useQuery";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import CardPost from "../../components/CardPost/CardPost";

const Search = ({ theme }) => {
    const query = useQuery();
    const search = query.get("query").toLocaleLowerCase();

    const { documents: posts } = useFetchDocuments("posts", search);

    return (
        <div className={styles.box_search}>
            <h2>
                Resultados para: <span>{search}</span>{" "}
            </h2>
            <div className={"container_posts"}>
                {posts &&
                    posts.map((post) => (
                        <CardPost key={post.id} post={post} theme={theme} />
                    ))}
                {posts.length === 0 && (
                    <h3>
                        Não foram encontrados resultados para{" "}
                        <span>{search}</span>.
                    </h3>
                )}
            </div>
        </div>
    );
};

export default Search;
