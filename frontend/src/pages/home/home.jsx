import Footer from "../../components/shared/footer/footer";
import Industries from "../../components/home/industries/industries";
import HeroSection from "../../components/home/hero-section/hero-section";
import FeatureSection from "../../components/home/feature-section/feature-section";
import Platform from "../../components/home/platform-section/platform-section";

const Home = () => {
	return (
		<div >
			<HeroSection />
			<FeatureSection />
			<Platform />
			<Industries />
			<Footer /> 
		</div>
	);
};

export default Home;
