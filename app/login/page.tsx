"use client";
import { useState } from "react";
import { login } from "../api/backend/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleLogin() {
    try {
      const res = await login(email, password);
      localStorage.setItem("token", res.data.access_token);
      setMessage("Login successful!");
      window.location.href = "/profile";
    } catch (err) {
      setMessage("Login failed");
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <p>{message}</p>
    </div>
  );
}

