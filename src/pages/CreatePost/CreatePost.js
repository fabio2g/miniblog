import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { useInsertDocument } from "../../hooks/useInsertDocument";
import styles from "./CreatePost.module.css";

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState("");
    const [error, setError] = useState("");

    const { user } = useAuthValue();
    const {
        insertDocument,
        loading,
        error: errorInsert,
    } = useInsertDocument("posts");

    const navegate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            new URL(image);
        } catch (error) {
            setError("A imagem precisa ser uma URL.");
        }

        const tagsArray = tags
            .split(",")
            .map((tag) => tag.trim().toLowerCase());

        insertDocument({
            title,
            image,
            body,
            tagsArray,
            user: user.uid,
            createdBy: user.displayName,
        });

        navegate("/")
    };

    useEffect(() => {
        if (errorInsert) return () => setError(errorInsert);
    }, [errorInsert]);

    return (
        <div className={styles.box_createPost}>
            <h1>Criar post</h1>
            <p>Escreva sobre seus interesse e compartilhe seu conhecimeto!</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Título:</span>
                    <input
                        type="text"
                        name="title"
                        required
                        placeholder="Pense em um bom título"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                </label>
                <label>
                    <span>URL da imagem:</span>
                    <input
                        type="text"
                        placeholder="Insira uma imagem que represente o seu post"
                        required
                        onChange={(e) => setImage(e.target.value)}
                        value={image}
                    />
                </label>
                <label>
                    <span>Conteúdo:</span>
                    <textarea
                        name="body"
                        placeholder="Insira o conteúdo do post"
                        required
                        onChange={(e) => setBody(e.target.value)}
                        value={body}
                    ></textarea>
                </label>
                <label>
                    <span>Tags:</span>
                    <input
                        type="text"
                        placeholder="Insira as tags separadas por vígula"
                        required
                        onChange={(e) => setTags(e.target.value)}
                        value={tags}
                    />
                </label>
                {loading ? (
                    <button className="btn_success btn_disabled" disabled>
                        Aguarde...
                    </button>
                ) : (
                    <button className="btn_success">Postar</button>
                )}
            </form>
            {error && (
                <div className="alert">
                    <span onClick={() => setError("")}>&times;</span>
                    <small>{error}</small>
                </div>
            )}
        </div>
    );
};

export default CreatePost;
