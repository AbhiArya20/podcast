import { BeatLoader } from "react-spinners";
import React from "react";
import styles from "@/button.module.css";
const Button = ({ children, onClick, loading, className, loaderColor = "black" }) => {
	return (
		<button
			onClick={(e) => {
				e.preventDefault();
				e.stopPropagation()
				onClick && onClick();
			}}
			className={`${styles.button} ${className}`}>
			{loading ? (
				<div style={{ width: '100%', display:"flex", justifyContent:'center'}}>
					<BeatLoader color={loaderColor} />
				</div>
			) : (
				<>{children}</>
			)}
		</button>
	);
};
export default Button;
