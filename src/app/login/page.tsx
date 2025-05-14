"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [invalidCredsError, setInvalidCredsError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const { login } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");
    setInvalidCredsError("");
    setIsLoading(true);

    let valid = true;

    if (!email) {
      setEmailError("Please enter your email");
      valid = false;
    } else if (!email.includes("@")) {
      setEmailError("Please enter a valid email address");
      valid = false;
    }

    if (!password) {
      setPasswordError("Please enter your password");
      valid = false;
    }

    if (!valid) {
      setIsLoading(false);
      return;
    }

    try {
      // Use the login function from AuthContext
      const success = await login(email, password);
      
      if (success) {
        // Redirect to dashboard or home page after successful login
        router.push('/');
      } else {
        setInvalidCredsError("Invalid email or password. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setInvalidCredsError("An error occurred during login. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-white flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-md w-full bg-[#027e3f] text-white p-10 rounded-3xl shadow-xl relative overflow-hidden border border-green-400"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-green-100 opacity-10 pointer-events-none" />

        <h2 className="text-3xl font-extrabold text-center mb-4 text-[#e2d7ab]">
          Welcome Back
        </h2>
        <div className="w-25 h-1 bg-[#e2d7ab] mx-auto mb-4 rounded-full" />

        <form onSubmit={handleLogin} className="space-y-5">
          <div className="text-right">
            <label className="block text-md font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 bg-white text-green-800 placeholder-gray-500 rounded-lg shadow-sm border border-green-100 focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
            {emailError && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-yellow-100 text-red-900 border border-red-300 text-sm rounded-lg px-4 py-3 mt-2 flex items-center gap-2 shadow-sm"
              >
                <span className="text-lg">ℹ️</span>
                <span className="font-medium">{emailError}</span>
              </motion.div>
            )}
          </div>

          <div className="text-right mt-2">
            <label className="block text-md font-medium mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 bg-white text-green-800 placeholder-gray-500 rounded-lg shadow-sm border border-green-100 focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
            {passwordError && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-yellow-100 text-red-900 border border-red-300 text-sm rounded-lg px-4 py-3 mt-2 flex items-center gap-2 shadow-sm"
              >
                <span className="text-lg">ℹ️</span>
                <span className="font-medium">{passwordError}</span>
              </motion.div>
            )}
          </div>

          {invalidCredsError && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-100 text-red-800 border border-red-300 text-sm rounded-lg px-4 py-3 mt-2 flex items-center gap-2 shadow-sm"
            >
              <span className="text-xl">🚫</span>
              <span className="font-medium">{invalidCredsError}</span>
            </motion.div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-black text-white text-xl font-bold py-3 rounded-xl transition duration-300 shadow-md hover:scale-105 hover:shadow-lg ${
              isLoading ? "opacity-70 cursor-not-allowed" : "hover:bg-gray-900"
            } mt-2`}
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        {/* Divider with "OR" */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t-2 border-gray-300"></div>
          <span className="mx-4 text-white text-lg font-semibold">OR</span>
          <div className="flex-grow border-t-2 border-gray-300"></div>
        </div>

        <div className="bg-white p-3.5 rounded-xl shadow-md border border-green-100">
          <p className="text-center text-md text-green-800">
            Don&apos;t have an account?{" "}
            <a
              href="/register"
              className="underline font-medium text-base hover:text-xl hover:text-green-400 transition-all duration-200"
            >
              Register
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}