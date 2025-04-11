"use client";
import React from "react";
import { TypographyComponentsProps } from "./typography_components";
import classNames from "classnames";

export default function Heading2({
  text,
  className,
}: TypographyComponentsProps) {
  return (
    <h2
      className={classNames("text-heading-2 text-on-foreground/90", className)}
    >
      {text}
    </h2>
  );
}
