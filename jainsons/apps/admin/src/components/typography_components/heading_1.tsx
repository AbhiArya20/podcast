"use client";
import React from "react";
import { TypographyComponentsProps } from "./typography_components";
import classNames from "classnames";

export default function Heading1({
  text,
  className,
}: TypographyComponentsProps) {
  return (
    <h1
      className={classNames("text-heading-1 text-on-foreground/90", className)}
    >
      {text}
    </h1>
  );
}
