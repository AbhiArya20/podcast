import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TypographyLarge } from "../typography/typography-large";

export default function Logo() {
  return (
    <Link
      href="/"
      className={
        "flex justify-start items-center gap-2 w-full select-none cursor-pointer"
      }
    >
      <Image
        width={10}
        height={10}
        src={`/logo.svg`}
        alt="logo"
        className={"h-8 w-8"}
      />
      <TypographyLarge className="text-white/60">Meeting Room</TypographyLarge>
    </Link>
  );
}
