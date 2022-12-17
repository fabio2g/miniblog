import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchDocument } from "../../hooks/useFetchDocument";

const EditPost = () => {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState("");
    const [error, setError] = useState("");

    const { id } = useParams();

    const { document: post, loading } = useFetchDocument("posts", id);

    useEffect(() => {
        if (post) {
            setTitle(post.title);
            setImage(post.image);
            setBody(post.body);

            const tags = post.tagsArray.join(", ");
            setTags(tags);
        }
    }, [post]);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    console.log("edit", post);

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
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
        </div>
    );
};

export default EditPost;
