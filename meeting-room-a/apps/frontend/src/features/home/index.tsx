import FeatureSection from "./components/feature-section/feature-section";
import HeroSection from "./components/hero-section/hero-section";
import Footer from "@/components/footer/footer";
import Platform from "./components/platform-section/platform-section";
import Industries from "./components/industries/industries";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <Platform />
      <Industries />
      <Footer />
    </div>
  );
};

export default Home;
