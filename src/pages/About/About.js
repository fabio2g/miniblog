import styles from "./About.module.css";

const About = () => {
    return (
        <div className={styles.box_about}>
            <h2>
                Sobre o Mini<span>Blog</span>
            </h2>
            <p>
                Este projeto consiste em um blog feito com React no front-end e
                Firebase no back-end.
            </p>
            <p>
                O propósito do blog é o compartilhamento de conhecimento sobre
                tecnologia e afins.
            </p>

            <img
                className={styles.banner}
                src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="tecnologia"
            />
        </div>
    );
};

export default About;
