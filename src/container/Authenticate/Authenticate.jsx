import React, { useState, useEffect } from "react";
import Layout from "../../utility/Layout";
import WelcomePage from "../../component/WelcomePage";
import LoginBox from "../../component/LoginBox";


const Authenticate = () => {
  const [user, setUser] = useState({});
  const [token, setToken] = useState(null);
  const [tokenIsValid, setTokenIsValid] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const logout = () => {
    setUser({});
    setToken(null);
    setTokenIsValid(false);
  };

  const resetCredentials = () => {
    setUsername('');
    setPassword('');
  };
  
  const attemptLogin = async () => {
    await fetch('http://localhost:3333/login', { 
      method: 'POST', 
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ username, password }),  
    })
    .then((res) => res.status === 200 ? login(res) : alert('Incorrect Username or Password 😞'))
    .catch(error => alert(error))
    .finally(resetCredentials);
   };

   const login = async (res) => {
    const { user, token } = await res.json();
    setUser(user);
    setToken(token);
  };

   const validateToken = () => {
     if (!token) return;
     fetch('http://localhost:3333/verifyToken', { 
       headers: { 'Authorization': `Bearer ${token}` }
      })
      .then((res) => setTokenIsValid(res.status === 200))
      .catch((error) => console.log(error));
   };

   useEffect(validateToken);

   return tokenIsValid 
   ? Layout('flexCenterCol', <WelcomePage user={user} logout={logout} />) 
   : Layout('flexCenterRow', <LoginBox attemptLogin={attemptLogin} setUserName={setUsername} setPassword={setPassword} />);
};

export default Authenticate;
