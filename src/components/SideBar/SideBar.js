import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import Search from "../Search/Search";
import SideCard from "../SideCard/SideCard";
import styles from "./SideBar.module.css";

const SideBar = () => {
    const { documents: post } = useFetchDocuments("posts");

    return (
        <div className={styles.sideBar}>
            <Search />
            {post && <SideCard post={post} />}
            {post && <SideCard post={post} />}
        </div>
    );
};

export default SideBar;
