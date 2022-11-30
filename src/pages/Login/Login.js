import { Link } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
    return (
        <div className={styles.box_login}>
            <h1>Login</h1>
            <form>
                <label>
                    <span>E-mail:</span>
                    <input
                        type="text"
                        name="email"
                        placeholder="E-mail do usuário"
                        required
                    />
                </label>
                <label>
                    <span>Senha:</span>
                    <input
                        type="password"
                        name="password"
                        placeholder="Informe sua senha"
                        required
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
