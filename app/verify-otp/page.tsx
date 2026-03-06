"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://13.201.22.139:8000";

export default function VerifyOtpPage() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      // Correct endpoint is /verify-otp
      await axios.post(`${API_URL}/verify-otp`, { email, otp });
      setSuccess("OTP verified successfully! You can now login.");
      router.push("/login");
    } catch (err: any) {
      console.error("Verify failed:", err.response?.data || err.message);
      setError(err.response?.data?.error || "Verification failed");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Verify OTP</h1>
        <form onSubmit={handleVerify} className="flex flex-col gap-4 w-64">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="border p-2 rounded"
            required
          />
          <button
            type="submit"
            className="bg-purple-600 text-white p-2 rounded hover:bg-purple-700"
          >
            Verify
          </button>
        </form>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        {success && <p className="text-green-500 mt-2">{success}</p>}
      </div>
    </>
  );
}

