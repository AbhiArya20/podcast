"use client";
import LogoSVG from "./logo_svg";

export default function Logo() {
  return (
    <div className="text-primary flex items-center gap-2">
      <span>
        <LogoSVG />
      </span>
      <h1 className={`text-3xl font-bold`}>Jainsons</h1>
    </div>
  );
}
