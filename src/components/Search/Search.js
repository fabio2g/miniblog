import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./Search.module.css";

const Search = () => {
    const [search, setSearch] = useState("");

    const theme = useContext(ThemeContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (search) return navegate(`/search?query=${search}`);
    };

    let navegate = useNavigate();

    return (
        <div>
            <form onSubmit={handleSubmit} className={styles.search}>
                <button>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
                <input
                    type="text"
                    name="search"
                    placeholder="Pesquise por postagens"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </form>
        </div>
    );
};

export default Search;
