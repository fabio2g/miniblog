import { db } from "../firebase/config";
import { doc, updateDoc } from "firebase/firestore";
import { useFetchDocument } from "./useFetchDocument";
import { useState } from "react";

export const useUpdateDocument = (collection, id) => {
    const [error, setError] = useState("");

    const { document: post } = useFetchDocument("posts", id);

    /**
     * Atualiza o campo "like" do banco com o registro do usuário que curtiu.
     * @param {object} userData
     * @returns {void}
     */
    const updateLike = async (userData) => {
        if (!id || !userData) return;
        try {
            const likesPost = JSON.parse(post.like);
            likesPost.push(userData);

            const json = JSON.stringify(likesPost);
            const docRef = doc(db, collection, id);

            await updateDoc(docRef, {
                like: json,
            });
        } catch (error) {
            setError(error.message);
            console.log("\x1b[31m%s\x1b[0m", "[App]", error.message);
        }
    };

    /**
     * Atualiza o campo "view" do banco com uma novo registro de view.
     */
    const updateView = async () => {
        console.log("1");
        // if (!post.view) return;
        console.log("2");
        
        try {
            const addView = post.view + 1;

            const docRef = doc(db, collection, id);
            await updateDoc(docRef, {
                view: addView,
            });
        } catch (error) {
            setError(error.message);
            console.log("\x1b[31m%s\x1b[0m", "[App]", error.message);
        }
    };

    return { updateLike, updateView, error };
};
