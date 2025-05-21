import React from "react";
import styles from "@/logo.module.css";

export default function Logo({ onClick }) {
	return (
		<div className={styles.logoContainer} onClick={onClick}>
			<img src={`/assets/logo.svg`} alt="logo" className={styles.logo} />
			<h1 className={styles.appTitle}>Meeting Room</h1>
		</div>
	);
}
