import React from "react";
import styles from "./Input.module.scss";

const Input = ({ placeholder, type, kind, changeHandler }) => (
  <input
    className={styles[kind]} 
    type={type}
    placeholder={placeholder} 
    kind={kind} 
    onChange={changeHandler}
  />
);

export default Input;
