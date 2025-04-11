import React, { useRef } from "react";
import styles from "./footer.module.css";

export default function Footer() {
	const footerRef = useRef();
	const tooltipRef = useRef();
	const handleToolTip = (e) => {
		const tooltip = tooltipRef.current;
		const footer = footerRef.current;
		if (tooltip && footer) {
			const toolTip = tooltip;
			const xPos = e.pageX;
			const yPos = -40;
			toolTip.style.left = xPos + "px";
			toolTip.style.top = yPos + "px";
		}
	};

	const date = new Date(Date.now());
	const year = date.getFullYear();

	return (
		<footer ref={footerRef} onMouseMove={handleToolTip} className={styles.footer}>
			<p>{"</> and crafted with 💛 by Abhi Arya"}</p>
			<span ref={tooltipRef} className={styles.tooltip}>
				&#169; {year}, Abhi Arya
			</span>
		</footer>
	);
}
