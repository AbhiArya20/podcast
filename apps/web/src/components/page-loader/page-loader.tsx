import FullScreenCard from "@/components/fullscreen-cards/fullscreen-card";
import { HashLoader } from "react-spinners";
import styles from "./page-loader.module.css";

type LoadingProps = {
  isLoading?: boolean;
  message?: string;
};

function PageLoader({ message, isLoading }: LoadingProps) {
  return (
    <FullScreenCard isLoading={isLoading}>
      <div className={styles.loaderWrapper}>
        <HashLoader color="#DB4437" />
        {message && <span className={styles.message}>{message}</span>}
      </div>
    </FullScreenCard>
  );
}

export default PageLoader;
