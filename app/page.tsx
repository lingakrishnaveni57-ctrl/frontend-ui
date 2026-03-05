"use client"

import { useEffect, useState } from "react"

export default function Home() {
  const [message, setMessage] = useState("Loading...")

  useEffect(() => {
    fetch("/api/backend")
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(() => setMessage("Backend not reachable"))
  }, [])

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-600">
          {message}
        </h1>
        <p className="mt-4 text-gray-600">
          DevOps Assignment Frontend
        </p>
      </div>
    </div>
  )
}
