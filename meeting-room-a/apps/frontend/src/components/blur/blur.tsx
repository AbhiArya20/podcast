import styles from "./blur.module.css";

function Blur() {
	return (
		<div className={styles.blurContainer}>
			<div className={`${styles.blob} ${styles.blob1}`}></div>
			<div className={`${styles.blob} ${styles.blob2}`}></div>
			<div className={`${styles.blob} ${styles.blob3}`}></div>
		</div>
	);
}

export { Blur };
