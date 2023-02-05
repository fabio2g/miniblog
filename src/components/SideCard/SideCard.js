import styles from "./SideCard.module.css";

const SideCard = ({ post }) => {
    return (
        <div className={styles.container}>
            <img src={post[0].image} alt="" />
        </div>
    );
};

export default SideCard;
