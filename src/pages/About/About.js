
import styles from "./About.module.css";

const About = () => {
    

    return (
        <div className={styles.box_about}>
            <h1>
                Sobre o Mini<span>Blog</span>
            </h1>
            <p>
                O projeto MiniBlog é um sistema de blog desenvolvido para
                publicar artigos sobre tecnologia sem fins lucrativos.
            </p>
            <p>
                Ele foi construído utilizando a biblioteca de JavaScript React
                para o front-end e o Firebase como banco de dados. O objetivo do
                projeto é permitir que os usuários publiquem e compartilhem seus
                conhecimentos e experiências na área de tecnologia.
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
