"use client";
import React from "react";
import { TypographyComponentsProps } from "./typography_components";
import classNames from "classnames";

export default function Heading5({
  text,
  className,
}: TypographyComponentsProps) {
  return (
    <h5
      className={classNames("text-heading-5 text-on-foreground/90", className)}
    >
      {text}
    </h5>
  );
}
