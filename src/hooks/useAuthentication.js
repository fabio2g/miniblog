import { db } from "../firebase/config";
import { useEffect, useState } from "react";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const useAuthentication = () => {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState("");
    const [cancelled, setCancelled] = useState(false);

    const auth = getAuth();

    const checkIfIsCancelled = () => {
        if (cancelled) return;
    };

    const login = async (data) => {
        checkIfIsCancelled();
        setLoading(true);
        setError("");

        try {
            await signInWithEmailAndPassword(auth, data.email, data.password);
            setLoading(false);
        } catch (error) {
            if (error.message.includes("user-not-found")) {
                setError("E-mail inválido.");
            } else if (error.message.includes("wrong-password")) {
                setError("Senha inválida.");
            } else {
                setError("Ocorreu um erro, tente novamente mais tarde.");
            }

            setLoading(false);
        }
    };

    useEffect(() => {
        return () => setCancelled(true);
    }, []);
    console.log(error);

    return { login, loading, error };
};
