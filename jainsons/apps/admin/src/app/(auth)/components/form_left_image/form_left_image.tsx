"use client";
import Image from "next/image";

export default function FormLeftImage({
  src,
}: Readonly<{
  src: string;
}>) {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Image
        className="w-full max-w-[700px] object-fit animate-fadein"
        src={src}
        width={700}
        height={700}
        priority={true}
        loading="eager"
        quality={1000}
        unoptimized={true}
        alt="login"
      />
    </div>
  );
}
