"use client";
import React from "react";
import { TypographyComponentsProps } from "./typography_components";
import classNames from "classnames";

export default function Heading4({
  text,
  className,
}: TypographyComponentsProps) {
  return (
    <h4
      className={classNames("text-heading-4 text-on-foreground/90", className)}
    >
      {text}
    </h4>
  );
}
