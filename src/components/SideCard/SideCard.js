import styles from "./SideCard.module.css";

const SideCard = ({ post }) => {
    return (
        <div className={styles.container}>
            {/* <img src={post[0].image} alt={""} />
            <div className={styles.content}>
                <p>{post[1].title}</p>
            </div> */}
        </div>
    );
};

export default SideCard;
