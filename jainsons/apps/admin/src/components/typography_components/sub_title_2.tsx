"use client";
import React from "react";
import { TypographyComponentsProps } from "./typography_components";
import classNames from "classnames";

export default function SubTitle2({
  text,
  className,
}: TypographyComponentsProps) {
  return (
    <span
      className={classNames("text-on-foreground/70 text-subtitle-2", className)}
    >
      {text}
    </span>
  );
}
