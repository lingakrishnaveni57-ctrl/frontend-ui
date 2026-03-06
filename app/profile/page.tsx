"use client";
import { useEffect, useState } from "react";
import { getProfile } from "../api/backend/auth";

export default function ProfilePage() {
  const [profile, setProfile] = useState<any>(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setMessage("Not logged in");
      return;
    }
    getProfile(token)
      .then(res => setProfile(res.data))
      .catch(() => setMessage("Failed to fetch profile"));
  }, []);

  return (
    <div>
      <h1>Profile</h1>
      {profile ? (
        <div>
          <p>Email: {profile.email}</p>
          <p>Verified: {profile.verified ? "Yes" : "No"}</p>
        </div>
      ) : (
        <p>{message}</p>
      )}
    </div>
  );
}

