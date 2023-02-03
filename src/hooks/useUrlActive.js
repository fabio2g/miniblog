import { useState } from "react";

export const useUrlActive = () => {
    const [url, setUrl] = useState("");
    const [error, setError] = useState("");

    const isActive = async (value) => {
        try {
            new URL(value);

            const response = await fetch(value);

            if (response.status === 200) {
                // console.log(value);
                setUrl(value);
            } else {
                // console.log("outra imagem");
            }
        } catch (e) {
            setError(e.message);
        }
    };

    return { url, isActive, error };
};
