import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import Search from "../Search/Search";
import SideCard from "../SideCard/SideCard";
import styles from "./SideBar.module.css";

const SideBar = () => {
    const { documents: post } = useFetchDocuments("posts");

    return (
        <div className={styles.sideBar}>
            <Search />
            <SideCard post={post} />
        </div>
    );
};

export default SideBar;
