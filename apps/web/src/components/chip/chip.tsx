import { MouseEventHandler, ReactNode } from "react";
import styles from "./chip.module.css";

type ChipProps = {
  label: string;
  icon: ReactNode;
  className?: string;
  labelClassName?: string;
  iconClassName?: string;
  onClick?: MouseEventHandler<HTMLSpanElement>;
  onMouseEnter?: MouseEventHandler<HTMLSpanElement>;
};

export default function Chip({
  label,
  icon,
  className,
  onMouseEnter,
}: ChipProps) {
  return (
    <span
      className={`${styles.heroChip} ${className}`}
      onMouseEnter={onMouseEnter}
    >
      <span>{label}</span>
      <span className={styles.heroChipIcon}>{icon}</span>
    </span>
  );
}
