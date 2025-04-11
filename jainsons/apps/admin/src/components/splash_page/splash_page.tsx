"use client";
import Logo from "../logo/logo";
import Heading5 from "../typography_components/heading_5";

function SplashPage() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-4 select-none">
      <Logo />
      <Heading5 text="Intelligent Global Solution" />
    </div>
  );
}

export default SplashPage;
