import { db } from "../firebase/config";
import { doc, updateDoc, FieldValue } from "firebase/firestore";
import { useFetchDocument } from "./useFetchDocument";

export const useUpdateDocument = (collection, id) => {
    const { document: post } = useFetchDocument("posts", id);

    const updateLike = async (data) => {
        if (!id || !data) return;
        try {
            const likesPost = JSON.parse(post.like);
            likesPost.push(data);

            const json = JSON.stringify(likesPost);
        
            const docRef = await doc(db, collection, id);

            await updateDoc(docRef, {
                like: json,
            });
        } catch (error) {
            console.log("Deu ruim...");
            console.log(error.message);
        }
    };

    return { updateLike };
};
