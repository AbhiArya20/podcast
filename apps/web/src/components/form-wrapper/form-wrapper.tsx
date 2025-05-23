import { ReactNode } from "react";
import FormLogo from "@/components/form-logo/form-logo";
import FullScreenCard from "@/components/fullscreen-cards/fullscreen-card";
import styles from "./form-wrapper.module.css";

type FormWrapperProps = {
  isLoading: boolean;
  children: ReactNode;
};

export default function FormWrapper({ children, isLoading }: FormWrapperProps) {
  return (
    <FullScreenCard isLoading={isLoading} withLogo={false}>
      <div className={styles.contentWrapper}>
        <FormLogo />
        <div className={styles.signInSectionWrapper}>{children}</div>
      </div>
    </FullScreenCard>
  );
}
