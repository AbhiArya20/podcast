import React from "react";
import styles from "./page-error.module.css";
import Button from "../button/button";
import { HiRefresh } from "react-icons/hi";
import { TiArrowBack } from "react-icons/ti";
import Navigation from "../navigation/navigation";
import Logo from "../logo/logo";

const PageError = ({ children, error, type }) => {
  const actionTypes = {
    retry: () => window.location.reload(),
    back: () => window.history.go(-1),
  };

  const actionTexts = {
    retry: "Try Again",
    back: "Return",
  };

  const actionIcons = {
    retry: <HiRefresh className={styles.actionIcon} />,
    back: <TiArrowBack className={styles.actionIcon} />,
  };

  return (
    <>
      <Navigation showLoginBtn={false} />
      <div className={styles.errorScreen}>
        <div className={styles.errorCard}>
          <div className={styles.errorContent}>
            <Logo />
            <div className={styles.errorDetails}>
              {error.Icon && <error.Icon className={styles.errorIcon} />}
              {error.message && (
                <span className={styles.errorMessage}>{error.message}</span>
              )}
              {error.description && (
                <div className={styles.descriptionContainer}>
                  <p className={styles.errorDescription}>{error.description}</p>
                </div>
              )}
              {children}
            </div>
            {type && (
              <div>
                <Button onClick={actionTypes[type]}>
                  <span>{actionTexts[type]}</span>
                  {actionIcons[type]}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PageError;
