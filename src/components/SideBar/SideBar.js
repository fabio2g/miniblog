import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import Search from "../Search/Search";
import SideCard from "../SideCard/SideCard";
import styles from "./SideBar.module.css";

const SideBar = () => {
    const { documents: post } = useFetchDocuments("posts");
    const theme = useContext(ThemeContext);

    // Ordena os posts pelo maior número de view
    const viewOrder = [...post].sort((a, b) => b.view - a.view);

    return (
        <div className={theme === "Dark" ? styles.sideBarDark : styles.sideBar}>
            <span className={styles.title}>Recomendos</span>
            {viewOrder &&
                viewOrder.map((post, index) => {
                    // retorna os 3 primeiros posts
                    if (index <= 2)
                        return <SideCard key={post.id} post={post} />;
                })}
        </div>
    );
};

export default SideBar;
