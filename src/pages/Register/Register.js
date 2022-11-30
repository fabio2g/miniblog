import styles from "./Register.module.css";

const Register = () => {
    return (
        <div className={styles.box_register}>
            <h1>Registre-se</h1>
            <form>
                <label>
                    <span>Nome:</span>
                    <input
                        type="text"
                        name="displayName"
                        placeholder="Nome do usuário"
                        required
                    />
                </label>
                <label>
                    <span>E-mail:</span>
                    <input
                        type="email"
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
                        placeholder="Insira a sua senha"
                        required
                    />
                </label>
                <label>
                    <span>Confirmação:</span>
                    <input
                        type="password"
                        name="password"
                        placeholder="Confirme a sua senha"
                        required
                    />
                </label>
                <button className="btn_success">Cadastrar</button>
            </form>
        </div>
    );
};

export default Register;
