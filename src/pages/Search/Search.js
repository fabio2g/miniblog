import styles from "./Search.module.css";
import { useQuery } from "../../hooks/useQuery";

const Search = () => {
    const query = useQuery();
    const search = query.get("query");

    return (
        <div>
            <h1>{search}</h1>
        </div>
    );
};

export default Search;
