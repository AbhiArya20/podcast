import { HeroBackground } from "@/components/hero-background/hero-background";
import HeroCardLeft from "@/components/home/hero-section/hero-card-left/hero-card-left";
import HeroCardRight from "@/components/home/hero-section/hero-card-right/hero-card-right";
import styles from "./hero-section.module.css";

const HeroSection = () => {
	return (
		<section className={styles.heroSection}>
			<HeroBackground />
			<div className={styles.heroContentWrapper}>
				<div className={styles.heroCard}>
					<HeroCardLeft />
					<HeroCardRight />
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
