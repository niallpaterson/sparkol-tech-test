import React from "react";
import styles from "./Button.module.scss";

const Button = ({ type, text, clickHandler }) => (
  <button className={`${styles.button} ${styles[type]}`} onClick={clickHandler}> 
    {text}
  </button>
);

export default Button;
