import styles from "./logo.module.css";
import { Link } from "react-router-dom";

type LogoProps = {
  to?: string;
};

export default function Logo({ to }: LogoProps) {
  const content = (
    <>
      <img src="/assets/logo.svg" alt="logo" className={styles.logoImage} />
      <h1 className={styles.logoTitle}>Meeting Room</h1>
    </>
  );

  return to ? (
    <Link to={to} className={styles.logoWrapper}>
      {content}
    </Link>
  ) : (
    <div className={styles.logoWrapper}>{content}</div>
  );
}
