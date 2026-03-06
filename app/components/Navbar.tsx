"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="flex gap-4">
        <Link href="/signup" className="hover:text-green-300">Signup</Link>
        <Link href="/login" className="hover:text-blue-300">Login</Link>
        <Link href="/verify-otp" className="hover:text-purple-300">Verify OTP</Link>
        <Link href="/profile" className="hover:text-yellow-300">Profile</Link>
      </div>
      <button
        onClick={handleLogout}
        className="bg-red-600 px-3 py-1 rounded hover:bg-red-700"
      >
        Logout
      </button>
    </nav>
  );
}

