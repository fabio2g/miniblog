import { db } from "../firebase/config";
import { doc } from "firebase/firestore";

export const useUpdateDocument = (collection) => {
    const updateLike = async (id, amountLikes) => {
        if (!id || !collection) return;

        try {
            const docRef = await doc(db, collection);

            await docRef.child(id).update({
                like: amountLikes,
            });
        } catch (error) {}
    };
};
