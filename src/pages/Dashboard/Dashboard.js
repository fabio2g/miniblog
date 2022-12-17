import styles from "./Dashboard.module.css";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

const Dashboard = () => {
    const [postsUser, setPostsUser] = useState([]);
    const [loading, setLoading] = useState("");

    const { user } = useAuthValue();
    const uid = user.uid;

    const { documents: posts } = useFetchDocuments("posts");

    useEffect(() => {
        const getPostByUserId = (postsList) => {
            setLoading(true);

            let postsFromUser = [];
            for (let i in postsList) {
                if (postsList[i].user === uid) postsFromUser.push(postsList[i]);
            }

            setPostsUser(postsFromUser);
            setLoading(false);
        };

        getPostByUserId(posts);
    }, [posts, uid]);

    return (
        <div className={styles.box_dashboard}>
            <h2>Gerencie seus posts</h2>
            {loading && (
                <div className={"loading"}>
                    <div className="loader"></div>
                </div>
            )}
            {postsUser.length > 0 ? (
                <div>
                    <table className={styles.box_table_posts}>
                        <tr>
                            <th className={styles.table_header}>Postagem</th>
                            <th className={styles.table_header}>Ação</th>
                        </tr>
                        {postsUser.map((post) => (
                            <tr>
                                <td className={styles.column1}>
                                    <strong>{post.title}</strong>
                                </td>
                                <td className={styles.column2}>
                                    <div>
                                        <Link to={`/post/${post.id}`}>
                                            <button className={styles.success}>
                                                Ver
                                            </button>
                                        </Link>
                                        <Link to={`/post/edit/${post.id}`}>
                                            <button className={styles.alert}>
                                                Editar
                                            </button>
                                        </Link>
                                        <button className={styles.danger}>
                                            Excluir
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </table>
                </div>
            ) : (
                <>
                    <h3>Você ainda não possui postagens</h3>
                    <Link to={"/post/create"}>
                        <button className="btn_success">
                            Crie seu primeiro post
                        </button>
                    </Link>
                </>
            )}
        </div>
    );
};

export default Dashboard;
