import React from "react";
import Input from "../../utility/Input";
import Button from "../../utility/Button";
import Box from "../../utility/Box";

const LoginBox = ({ attemptLogin, setUserName, setPassword }) => (
  <Box kind="frosted" layout="flexCenterCol">
    <Input 
      id="username" 
      placeholder="username" 
      kind="login"
      type="text"
      changeHandler={(e) => setUserName(e.target.value)} 
    />
    <Input 
      id="password" 
      placeholder="password" 
      kind="login" 
      type="password"
      changeHandler={(e) => setPassword(e.target.value)} 
    />
    <Button 
      type="login" 
      text="Login" 
      clickHandler={attemptLogin}
    />
  </Box>
);

export default LoginBox;
