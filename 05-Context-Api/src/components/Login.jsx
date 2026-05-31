import React from "react";
import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [passward, setPassword] = useState("");

  const { setUser } = useContext(UserContext);
  const handleClick = (e) => {
    e.preventDefault();
    setUser({ username, passward });
  };
  return (
    <>
      <input
        value={username}
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <input
        value={passward}
        placeholder="passward"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button onClick={handleClick}>Login</button>
    </>
  );
};

export default Login;
