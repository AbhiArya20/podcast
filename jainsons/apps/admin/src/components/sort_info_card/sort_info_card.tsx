"use client";
import React from "react";
import Caption from "../typography_components/caption";
import Heading6 from "../typography_components/heading_6";
import Image from "next/image";

interface ISortInfoCardProps {
  title: string;
  subTitle: string;
  src: string;
}
export default function SortInfoCard({
  title,
  subTitle,
  src,
}: ISortInfoCardProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-10 h-10 overflow-hidden flex justify-center items-center">
        <Image
          src={src}
          alt={title}
          width={38}
          height={38}
          className="rounded-md"
        />
      </span>
      <div className="flex flex-col">
        <Heading6 text={title} />
        <Caption text={subTitle} />
      </div>
    </div>
  );
}
