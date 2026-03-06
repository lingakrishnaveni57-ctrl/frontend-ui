"use client";
import { useState } from "react";
import { signup } from "../api/backend/auth";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleSignup() {
    try {
      await signup(email, password);
      setMessage("Signup successful! Check your email for OTP.");
      window.location.href = "/verify-otp";
    } catch (err) {
      setMessage("Signup failed");
    }
  }

  return (
    <div>
      <h1>Signup</h1>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleSignup}>Signup</button>
      <p>{message}</p>
    </div>
  );
}

