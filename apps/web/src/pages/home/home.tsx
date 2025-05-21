import CopyrightFooter from "@/components/copywright-footer/copywright-footer";
import FeatureSection from "@/components/home/feature-section/feature-section";
import FeatureSectionContextProvider from "@/context/feature-section";
import HeroSection from "@/components/home/hero-section/hero-section";
import Industries from "@/components/home/industries/industries";
import Navbar from "@/components/navbar/navbar";
import Platform from "@/components/home/platform-section/platform-section";

const Home = () => {
  return (
    <>
      <Navbar withLoginButton={true} />
      <HeroSection />
      <FeatureSectionContextProvider>
        <FeatureSection />
      </FeatureSectionContextProvider>
      <Platform />
      <Industries />
      <CopyrightFooter />
    </>
  );
};

export default Home;
