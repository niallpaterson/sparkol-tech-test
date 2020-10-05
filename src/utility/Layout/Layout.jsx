import React from "react";
import styles from "./Layout.module.scss";

const Layout = (layout, component) => (
  <div className={styles[layout]}>
    {component}
  </div>
);

export default Layout;
