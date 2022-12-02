import { db } from "../firebase/config";
import { useEffect, useState } from "react";
import { addDoc, collection, Timestamp } from "firebase/firestore";

export const useInsertDocument = (docCollection) => {
    const [loading, setLoading] = useState("");
    const [error, setError] = useState("");
    const [cancelled, setCancelled] = useState(false);

    const insertDocument = async (document) => {
        if (cancelled) return;

        setLoading(true);

        try {
            // const newDocument = { ...document, createAt: Timestamp.now() };
            // await addDoc(collection(db, docCollection), newDocument);

            console.log("document:", ...document, "createAt:", Timestamp.now(), docCollection);

            setLoading(false);
        } catch (error) {
            setError(error);
            console.log("useInsert:", error.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        return () => setCancelled(true);
    });

    return { insertDocument, loading, error };
};
