"use client";
import React from "react";
import { TypographyComponentsProps } from "./typography_components";
import classNames from "classnames";

export default function Heading6({
  text,
  className,
}: TypographyComponentsProps) {
  return (
    <h6
      className={classNames("text-heading-6 text-on-foreground/90", className)}
    >
      {text}
    </h6>
  );
}
