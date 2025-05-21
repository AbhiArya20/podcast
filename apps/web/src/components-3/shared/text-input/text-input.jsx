import React from "react";
import styles from "@/text-input.module.css";

const TextInput = (props) => {
  return (
    <div className={styles.inputWrapper}>
      <input
        className={styles.input}
        style={{
          width: props.fullwidth === "true" ? "100%" : "inherit",
        }}
        type="text"
        {...props}
      />
    </div>
  );
};

export default TextInput;
