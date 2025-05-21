import Description from "@/components/description/description";
import HeroButton from "@/components/home/hero-section/hero-button/hero-button";
import HeroMessage from "@/components/home/hero-section/hero-message/hero-message";
import styles from "./hero-card-left.module.css";

const HeroCardLeft = () => {
	return (
		<div className={styles.heroCardLeft}>
			<div className={styles.heroDetailsWrapper}>
				<HeroMessage />
				<Description description={"Seamlessly connect with high-quality video, real-time chat, and easy presentation tools anytime, anywhere. Transform your teamwork and drive projects forward effortlessly!"} />
				<HeroButton />
			</div>
		</div>
	);
};

export default HeroCardLeft;
