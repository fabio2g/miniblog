import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import {
    collection,
    onSnapshot,
    orderBy,
    query,
    where,
} from "firebase/firestore";

export const useFetchDocuments = (
    docColllection,
    search = null,
    uid = null
) => {
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
                let dataQuery;

                if (search) {
                    dataQuery = await query(
                        collectionRef,
                        where("tagsArray", "array-contains", search),
                        orderBy("createAt", "desc")
                    );
                } else if (uid) {
                    dataQuery = await query(
                        collectionRef,
                        where("uid", "==", uid),
                        orderBy("createAt", "desc")
                    );
                } else {
                    dataQuery = await query(
                        collectionRef,
                        orderBy("createAt", "desc")
                    );
                }

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
    }, [docColllection, search, uid, cancelled]);

    useEffect(() => {
        return () => setCancelled(true);
    }, []);

    return { documents, loading, error };
};
