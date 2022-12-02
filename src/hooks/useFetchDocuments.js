import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

export const useFetchDocuments = (docColllection) => {
    const [documents, setDocuments] = useState("");
    const [loading, setLoading] = useState("");
    const [error, setError] = useState("");
    const [cancelled, setCancelled] = useState("");

    useEffect(() => {
        const loadDocuments = async () => {
            if (cancelled) return;

            setLoading(true);
            setError("");

            const collectionRef = collection(db, docColllection);

            try {
                const dataQuery = await query(
                    collectionRef,
                    orderBy("createAt", "desc")
                );

                onSnapshot(dataQuery, (querySnapshot) => {
                    setDocuments(
                        querySnapshot.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data(),
                        }))
                    );
                });
                setLoading(false);
            } catch (error) {
                setError(error.message);
                console.log(error.message);
                setLoading(false);
            }
        };
        loadDocuments();
    }, [docColllection, cancelled]);

    useEffect(() => {
        return () => setCancelled(true);
    }, []);

    return { documents, loading, error };
};
