import { useEffect, useState } from "react";

import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";

export const useFetchDocument = (docCollection, id) => {
    const [document, setDocument] = useState("");
    const [loading, setLoading] = useState("");
    const [cancelled, setCancelled] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const loadingDoc = async () => {
            if (cancelled) return;

            setLoading(true);
            setError("");

            try {
                const docRef = doc(db, docCollection, id);
                const docSnap = await getDoc(docRef);

                setDocument(docSnap.data());
                setLoading(false);
            } catch (error) {
                setError(error.message);
                console.log(error);

                setLoading(false);
            }
        };
        loadingDoc();
    }, [docCollection, id, cancelled]);

    useEffect(() => {
        return () => setCancelled(true);
    }, []);

    return { document, loading, error };
};
