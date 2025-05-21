import React from "react";
import styles from "@/avatar.module.css";
export default function Avatar({ src, onClick, className }) {
	return (
		<div className={styles.userBtn}>
			<img className={`${styles.userAvatar} ${className}`} src={src} width="40" height="40" alt="avatar" onClick={onClick} />
		
		</div>
	);
}
