"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://13.201.22.139:8000";

export default function ProfilePage() {
  const [profile, setProfile] = useState<any>(null);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }

    const fetchProfile = async () => {
      try {
        console.log("Calling API:", `${API_URL}/profile`);
        const res = await axios.get(`${API_URL}/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log("Profile response:", res.data);
        setProfile(res.data);
      } catch (err: any) {
        console.error("Profile fetch failed:", err.response?.data || err.message);
        setError(err.response?.data?.detail || "Failed to fetch profile");
      }
    };

    fetchProfile();
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  if (error) {
    return (
      <>
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-red-500">{error}</h1>
          <button
            onClick={handleLogout}
            className="mt-4 bg-gray-600 text-white p-2 rounded hover:bg-gray-700"
          >
            Logout
          </button>
        </div>
      </>
    );
  }

  if (!profile) {
    return (
      <>
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1>Loading profile...</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Profile</h1>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Verified:</strong> {profile.verified ? "Yes" : "No"}</p>
        <button
          onClick={handleLogout}
          className="mt-6 bg-red-600 text-white p-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </>
  );
}

