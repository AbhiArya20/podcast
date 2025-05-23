import Avatar from "@/components/avatar/avatar";
import Button from "@/components/button/button";
import { FaUpload } from "react-icons/fa6";
import FormError from "@/components/form-error/form-error";
import FormLeft from "@/components/form-left/form-left";
import FormWrapper from "@/components/form-wrapper/form-wrapper";
import PageLoader from "@/components/page-loader/page-loader";
import styles from "./step-avatar.module.css";
import useAvatarStep from "@/hooks/auth-hooks/use-avatar-step";
import { useRef } from "react";
import { TiArrowRight } from "react-icons/ti";
const StepAvatar = () => {
  const {
    image,
    captureImage,
    error,
    isLoading,
    randomAvatars,
    setImage,
    setAvatarFile,
    update
  } = useAvatarStep();

  if (isLoading) return <PageLoader message="Activation in progress..." />;

  const inputRef = useRef<HTMLInputElement>(null);
  const handleUploadClick = () => {
    inputRef.current?.click();
  };

  return (
    <FormWrapper isLoading={isLoading}>
      <FormLeft
        title="Profile Picture"
        description="Choose a profile icon below or upload your favorite."
      >
        <div className={styles.avatarContainer}>
          {randomAvatars.map((avatar, index) => (
            <Avatar
              key={index}
              className={`${styles.avatars} ${avatar !== image && styles.avatarBorder}`}
              imageUrl={avatar}
              alt="avatar"
              onClick={() => {
                setImage(avatar);
                setAvatarFile(avatar);
              }}
            />
          ))}
        </div>
      </FormLeft>
      <form className={styles.formContainer}>
        <FormError
          message={error?.message ?? ""}
          description={error?.message}
        />
        <input
          onChange={captureImage}
          id="avatarInput"
          type="file"
          className={styles.avatarInput}
          accept="image/png, image/jpeg, image/gif"
          ref={inputRef}
        />
        <label className={styles.avatarLabel} htmlFor="avatarInput">
          <div className={styles.avatarWrapper}>
            <img
              className={styles.avatarImage}
              src={image?.toString()}
              alt="avatar"
            />
            <Button
              className={styles.uploadButton}
              stopPropagation={false}
              onClick={handleUploadClick}
            >
              <span>{"Choose New"}</span>
              <FaUpload className={styles.actionIcon} />
            </Button>
          </div>
        </label>

        <Button onClick={update} isLoading={isLoading} loaderColor="white">
          <span>Next</span>
          <TiArrowRight className={styles.authIcon} />
        </Button>
      </form> 
    </FormWrapper>
  );
};
 
export default StepAvatar;
