import React from "react";

const Search = () => {
    const [search, setSearch] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (search) return navegate(`/search?query=${search}`);
    };

    return (
        <div>
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
        </div>
    );
};

export default Search;
