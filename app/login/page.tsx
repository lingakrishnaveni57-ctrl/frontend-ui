"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://13.201.22.139:8000";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Debug log to confirm integration
    console.log("Calling API:", `${API_URL}/login`);

    try {
      const res = await axios.post(`${API_URL}/login`, { email, password });
      console.log("Login response:", res.data);

      localStorage.setItem("token", res.data.access_token);
      router.push("/profile");
    } catch (err: any) {
      console.error("Login failed:", err.response?.data || err.message);
      setError(err.response?.data?.detail || "Login failed");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form onSubmit={handleLogin} className="flex flex-col gap-4 w-64">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 rounded"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    </>
  );
}

