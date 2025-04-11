"use client";
import React from "react";
import { TypographyComponentsProps } from "./typography_components";
import classNames from "classnames";

export default function Body2({ text, className }: TypographyComponentsProps) {
  return (
    <span
      className={classNames("text-body-2 text-on-foreground/70", className)}
    >
      {text}
    </span>
  );
}
