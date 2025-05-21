import React, { FC } from "react";

import LargeCard from "@/components/large-card/large-card";
import Navbar from "@/components/navbar/navbar";
import styles from "./fullscreen-card.module.css";

type FullScreenCardProps = {
  isLoading?: boolean;
  withNavbar?: boolean;
  withLogo?: boolean;
  withLoginButton?: boolean;
  children?: React.ReactNode | null;
};

export default function FullScreenCard({
  isLoading,
  withNavbar = true,
  withLogo = true,
  withLoginButton = false,
  children,
}: FullScreenCardProps) {
  return (
    <div className={styles.fullScreenWrapper}>
      {withNavbar && <Navbar withLoginButton={withLoginButton} />}
      <div className={styles.screenWrapper}>
        <LargeCard isLoading={isLoading} withLogo={withLogo}>
          {children}
        </LargeCard>
      </div>
    </div>
  );
}
