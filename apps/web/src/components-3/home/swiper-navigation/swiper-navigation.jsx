import styles from "@/swiper-navigation.module.css";

const SwiperNavigation = ({ count = 3, activeIndex, onClick }) => {
	return (
		<div className={styles.customPagination}>
			{[...Array(count)].map((_, index) => (
				<span
					key={index}
					className={`${styles.customPaginationDot} ${activeIndex === index && styles.customPaginationActive}`} // Add active class
					onClick={() => onClick(index)} // Navigate to the slide on click
				/>
			))}
		</div>
	);
};

export default SwiperNavigation;