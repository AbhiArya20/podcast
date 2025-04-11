"use client";
import React from "react";
import { TypographyComponentsProps } from "./typography_components";
import classNames from "classnames";

export default function Body1({ text, className }: TypographyComponentsProps) {
  return (
    <span
      className={classNames("text-body-1 text-on-foreground/70", className)}
    >
      {text}
    </span>
  );
}
