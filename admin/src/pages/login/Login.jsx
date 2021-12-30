import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <form action="" className="loginForm">
        <input
          type="text"
          placeholder="email"
          className="loginInput"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input type="password" placeholder="password" className="loginInput" onChange={(e)=>{
            setPassword(e.target.value);
        }}/>
        <button className="loginButton">Login</button>
      </form>
    </div>
  );
};

export default Login;
