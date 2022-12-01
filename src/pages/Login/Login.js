import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className={styles.box_login}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
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
                <button className="btn_success">Entrar </button>
                <p>
                    Ainda não possui um conta?{" "}
                    <Link to={"/login/register"}>Registre-se</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
