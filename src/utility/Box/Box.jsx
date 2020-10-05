import React from "react";
import styles from "./Box.module.scss";
import layoutStyles from "../Layout/Layout.module.scss"

const Box = ({ kind, layout, children }) => (
  <div className={`${styles.box} ${styles[kind]} ${layoutStyles[layout]}` }> 
  {children}
  </div>
);

export default Box;
