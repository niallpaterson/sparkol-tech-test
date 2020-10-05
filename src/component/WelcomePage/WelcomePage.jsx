import React from "react";
import Button from "../../utility/Button";
import styles from "./WelcomePage.module.scss"
import Box from "../../utility/Box";

const WelcomePage = ({ user, logout }) => (
  <Box layout="flexCenterCol">
    <p className={styles.greeting}> {`👋 Hey there ${user.name} 😀!`} </p>
    <Button type="logout" text="Logout" clickHandler={logout} />
  </Box>
);

export default WelcomePage;
