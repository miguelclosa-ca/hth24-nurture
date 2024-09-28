// src/components/AuthForm.js

import React, { useState } from "react";
import { signup, login, logout, useAuth } from "./useAuth";
import "../styles/AuthFormSheet.css";

export default function AuthForm() {
  const currentUser = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      await signup(email, password);
    } catch (error) {
      console.error("Sign-up error:", error);
    }
  };

  const handleLogin = async () => {
    try {
      await login(email, password);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div>
      {currentUser ? (
        <div className="on-btn-click">

          <div className="welcome-msg">
            <h2>Welcome, {currentUser.email}!</h2>
            <button onClick={handleLogout}>Logout</button>
          </div>


        </div>
      ) : (
          <div className="auth-container">
            <h1 id="title">Nurture</h1>
            <div className="signup-login">
              <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
              />
              <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
              />
              <div className="auth-btn">
                <button onClick={handleSignUp} className="sign-btn">Sign Up</button>
                <button onClick={handleLogin} className="log-btn">Login</button>
              </div>
            </div>
          </div>
      )}
    </div>
  );
}
