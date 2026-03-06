"use client";
import { useState } from "react";
import { verifyOtp } from "../api/backend/auth";

export default function VerifyOtpPage() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");

  async function handleVerify() {
    try {
      await verifyOtp(email, otp);
      setMessage("Account verified! You can now login.");
      window.location.href = "/login";
    } catch (err) {
      setMessage("Verification failed");
    }
  }

  return (
    <div>
      <h1>Verify OTP</h1>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="text" placeholder="OTP" value={otp} onChange={e => setOtp(e.target.value)} />
      <button onClick={handleVerify}>Verify</button>
      <p>{message}</p>
    </div>
  );
}

