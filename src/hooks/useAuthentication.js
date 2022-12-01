import { db } from "../firebase/config";
import { useEffect, useState } from "react";

import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
} from "firebase/auth";


export const useAuthentication = () => {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState("");
    const [cancelled, setCancelled] = useState(false);

    const auth = getAuth();

    const checkIfIsCancelled = () => {
        if (cancelled) return;
    };

    /**
     * Cria um usuário autenticado através do email e senha.
     *
     * @param {email, password} data
     * @returns
     */
    const createUser = async (data) => {
        checkIfIsCancelled();
        setLoading(true);
        setError("");

        try {
            const { user } = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            );

            await updateProfile(user, {
                displayName: data.displayName,
            });

            setLoading(false);
        } catch (error) {
            console.log(error.message);
            setError(error.message);
        }
    };

    /**
     * Login verifica na base de dados do firabase
     * se email e senha estão cadastrados.
     *
     * @param {email, password} data
     */
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

    /**
     * Encerra a seção do usuário, desconectando o usuário da aplicação.
     */
    const logout = () => {
        checkIfIsCancelled();
        signOut(auth);
    };

    useEffect(() => {
        return () => setCancelled(true);
    }, []);

    return { auth, createUser, login, logout, loading, error };
};
