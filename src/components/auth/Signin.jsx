import {signInWithEmailAndPassword} from "firebase/auth"
import React, { useState } from "react";
import { auth } from "../../LoginPage";
import './SignIn.css'
import './responsive.css'
import logo from './OD-Logo.png'

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    //to do : sign in
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="sign-in-container">
      <form onSubmit={signIn}>
        <img src={logo} alt="logo"></img>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">LOG IN</button>
      </form>
    </div>
  );
};

export default Signin;
