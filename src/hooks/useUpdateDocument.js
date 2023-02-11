import { db } from "../firebase/config";
import { doc, updateDoc } from "firebase/firestore";
import { useFetchDocument } from "./useFetchDocument";

export const useUpdateDocument = (collection, id) => {
    const { document: post } = useFetchDocument("posts", id);

    /**
     * Atualiza o campo "like" do banco com o registro do usuário que curtiu.
     * @param {object} userData
     * @returns
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
            console.log(error.message);
        }
    };

    /**
     * Atualiza o campo "view" do banco com uma novo registro de view.
     */
    const updateView = async () => {
        const addView = post.view + 1;

        const docRef = doc(db, collection, id);
        await updateDoc(docRef, {
            view: addView,
        });
    };

    return { updateLike, updateView };
};
