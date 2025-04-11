"use client";
import React from "react";
import { TypographyComponentsProps } from "./typography_components";
import classNames from "classnames";

export default function ButtonText({
  text,
  className,
}: TypographyComponentsProps) {
  return (
    <span
      className={classNames(
        "-tracking-tight text-button text-on-foreground/90",
        className
      )}
    >
      {text}
    </span>
  );
}
