import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthentication } from "../../hooks/useAuthentication";
import styles from "./Login.module.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const { login, loading, error: errorAuth } = useAuthentication();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = {
            email,
            password,
        };

        await login(user);
    };

    useEffect(() => {
        if (errorAuth) setError(errorAuth);
    }, [errorAuth]);

    return (
        <div className={styles.box_login}>
            <h1>Login</h1>
            <p className={styles.message}>Faça seu login e compartilhe seu conhecimento</p>
            <form className="form" onSubmit={handleSubmit}>
                <label>
                    <span>E-mail:</span>
                    <input
                        type="text"
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
                        placeholder="Informe sua senha"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </label>
                {loading ? (
                    <button className="btn_success btn_disabled" disabled>
                        Aguarde...
                    </button>
                ) : (
                    <button className="btn_success">Entrar</button>
                )}

                <p>
                    Ainda não possui um conta?{" "}
                    <Link to={"/login/register"}>Registre-se</Link>
                </p>
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

export default Login;
