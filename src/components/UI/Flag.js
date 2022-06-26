import React from "react";
import styles from "./Flag.module.css";

const Flag = (props) => {
  const pickLanguageHandler = (e) => {
    props.onPickLanguage(e.target.innerText);
  };

  return (
    <div className={styles.flagContainer}>
      <button className={styles.languageButton} onClick={pickLanguageHandler}>
        {props.language}
      </button>
    </div>
  );
};

export default Flag;
