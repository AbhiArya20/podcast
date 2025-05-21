import React from "react";
import styles from "@/page-loader.module.css";
import { HashLoader } from "react-spinners";
import Navigation from "@/navigation/navigation";
import Logo from "@/logo/logo";
const PageLoader = ({ message }) => {
	return (
		<>
			<Navigation showLoginBtn={false} />
			<div className={styles.loaderScreen}>
				<div className={styles.loaderCard}>
					<div className={styles.loaderContent}>
						<div className={styles.loaderSmall}>
							<HashLoader color="#DB4437" />
						</div>
						<Logo />
						<div className={styles.loaderLarge}>
							<HashLoader color="#DB4437" />
							<span className={styles.loaderMessage}>{message}</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PageLoader;
