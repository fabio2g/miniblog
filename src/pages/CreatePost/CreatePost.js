import { useState } from "react";
import styles from "./CreatePost.module.css";

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        /**
         * Verifica se a URL passada por parâmetro é válida.
         *
         * @param {String} url
         * @returns
         */
        function isURL(url) {
            const expression =
                /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;

            const regex = new RegExp(expression);

            return url.match(regex) ? true : false;
        }

        if (!isURL(image)) {
            setError("URL inválida.");
            return;
        }

        const tagsArray = tags
            .split(",")
            .map((tag) => tag.trim().toLowerCase());

        // console.log(tagsArray);
    };

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
                        cols="30"
                        rows="10"
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
                <button className="btn_success">Postar</button>
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
