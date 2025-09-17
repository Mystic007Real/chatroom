// pages/index.tsx
import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (username.trim()) {
      router.push(`/chat?username=${encodeURIComponent(username)}`);
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[#313338] text-white">
      <h1 className="text-3xl mb-4">Welcome to Chatroom</h1>
      <input
        className="px-4 py-2 rounded bg-[#1e1f22] text-white focus:outline-none"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleLogin()}
      />
      <button
        onClick={handleLogin}
        className="mt-4 bg-blue-600 px-4 py-2 rounded hover:bg-blue-500"
      >
        Enter Chat
      </button>
    </div>
  );
}
