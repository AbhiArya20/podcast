"use client";
import React from "react";
import { TypographyComponentsProps } from "./typography_components";
import classNames from "classnames";

export default function Heading3({
  text,
  className,
}: TypographyComponentsProps) {
  return (
    <h3
      className={classNames("text-heading-3 text-on-foreground/90", className)}
    >
      {text}
    </h3>
  );
}
