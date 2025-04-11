"use client";
import { FC } from "react";

interface IAuthFormHeaderProps {
  title: string;
  description: string;
}

const AuthFormHeader: FC<IAuthFormHeaderProps> = ({ title, description }) => {
  return (
    <div className="w-full">
      <div className="spacing text-on-foreground text-heading-4 tracking-wide">
        {title}
      </div>
      <div className="text-on-foreground/70 mt-1 text-subtitle-1">
        {description}
      </div>
    </div>
  );
};

export default AuthFormHeader;
