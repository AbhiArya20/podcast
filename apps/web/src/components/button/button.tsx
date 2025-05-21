import React from "react";

import { BeatLoader } from "react-spinners";
import styles from "./button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  isLoading?: boolean;
  className?: string;
  loaderColor?: string;
};

export default function ({
  children,
  onClick,
  isLoading = false,
  className = "",
  loaderColor = "var(--text)",
}: ButtonProps) {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        if (onClick) onClick();
      }}
      className={`${styles.button} ${className}`}
      disabled={isLoading}
    >
      {isLoading ? (
        <div className={styles.loaderWrapper}>
          <BeatLoader color={loaderColor} />
        </div>
      ) : (
        <>{children}</>
      )}
    </button>
  );
}
