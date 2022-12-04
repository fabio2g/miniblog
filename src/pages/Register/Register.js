import { useEffect, useState } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";
import styles from "./Register.module.css";

const Register = () => {
    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [error, setError] = useState("");

    const { createUser, loading, error: errorAuth } = useAuthentication();

    const handeleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPass) {
            setError("As senhas precisam ser iguais.");
            return;
        }

        if (password.length < 6 || confirmPass.length < 6) {
            setError("A senha precisa conter no mínimo 6 caracteres.");
            return;
        }

        const user = {
            displayName,
            email,
            password,
        };

        await createUser(user);
    };

    useEffect(() => {
        if (errorAuth) setError(errorAuth);
    }, [errorAuth]);

    return (
        <div className={styles.box_register}>
            <h1>Registre-se</h1>
            <form className="form" onSubmit={handeleSubmit}>
                <label>
                    <span>Nome:</span>
                    <input
                        type="text"
                        name="displayName"
                        placeholder="Nome do usuário"
                        required
                        onChange={(e) => setDisplayName(e.target.value)}
                        value={displayName}
                    />
                </label>
                <label>
                    <span>E-mail:</span>
                    <input
                        type="email"
                        name="email"
                        placeholder="E-mail do usuário"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </label>
                <label>
                    <span>Senha:</span>
                    <input
                        type="password"
                        name="password"
                        placeholder="Insira a sua senha"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </label>
                <label>
                    <span>Confirmação:</span>
                    <input
                        type="password"
                        name="password"
                        placeholder="Confirme a sua senha"
                        required
                        onChange={(e) => setConfirmPass(e.target.value)}
                        value={confirmPass}
                    />
                </label>
                {loading ? (
                    <button className="btn_success btn_disabled" disabled>
                        Aguarde...
                    </button>
                ) : (
                    <button className="btn_success">Cadastrar</button>
                )}
                {error && (
                    <div className="alert">
                        <span onClick={() => setError("")}>&times;</span>
                        <small>{error}</small>
                    </div>
                )}
            </form>
        </div>
    );
};

export default Register;
