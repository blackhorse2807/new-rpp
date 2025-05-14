"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

export default function RegisterPage() {
  const [role, setRole] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [doc, setDoc] = useState<File | null>(null);
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  type IRegisterData = {
    full_name: string,
    email_id: string,
    password: string,
    verification_doc: File | null,
    type: string
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!fullName || !email || !password || !confirm) {
      setError("Please fill in all required fields");
      return;
    }

    if (password !== confirm) {
      setError("Passwords do not match");
      return;
    }

    if (role === "seller") {
      if (!doc) {
        setError("Please upload verification document");
        return;
      }
      if (!agreed) {
        setError("You must agree to the Terms & Conditions");
        return;
      }
    }

    console.log({
      role,
      fullName,
      email,
      password,
      document: doc ? doc.name : null,
      agreed,
    });

    const backend_url = "http://localhost:8000";
    const registerData: IRegisterData = { full_name: fullName, email_id: email, password: password, type: role, verification_doc: doc };

    fetch(backend_url+ "/auth/signup", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(registerData)
    })
    .then(response => response.json())
    .then(result => console.log(result));

    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-white flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-xl w-full bg-green-500 text-white p-10 rounded-3xl shadow-xl relative overflow-hidden border border-green-400"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-green-100 opacity-10 pointer-events-none" />

        {!role ? (
          <>
            <h2 className="text-3xl font-extrabold text-center mb-4">
              Join Us
            </h2>
            <div className="w-25 h-1 bg-white mx-auto mb-6 rounded-full" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white text-green-900 p-8 rounded-2xl shadow-md cursor-pointer text-center hover:shadow-xl transition min-h-[220px] flex flex-col justify-center"
                onClick={() => setRole("buyer")}
              >
                <h3 className="text-2xl font-bold mb-2">Sign up as Buyer</h3>
                <p className="text-sm">Browse and purchase recycled products.</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white text-green-900 p-8 rounded-2xl shadow-md cursor-pointer text-center hover:shadow-xl transition min-h-[220px] flex flex-col justify-center"
                onClick={() => setRole("seller")}
              >
                <h3 className="text-2xl font-bold mb-2">Sign up as Seller</h3>
                <p className="text-sm">List products and connect with buyers.</p>
              </motion.div>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-center capitalize mb-4">
              {role} Registration
            </h2>
            <div className="w-20 h-1 bg-white mx-auto mb-4 rounded-full" />
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-100 text-red-800 border border-red-300 text-sm rounded-lg px-4 py-3 mb-4 flex items-center gap-2 shadow-sm"
              >
                <span className="text-xl">🚫</span>
                <span className="font-medium">{error}</span>
              </motion.div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4 text-green-900">
              <div className="text-right">
                <label className="block mb-1 text-white font-medium">Full Name</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-2 rounded-md border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-300 bg-white"
                />
              </div>
              <div className="text-right">
                <label className="block mb-1 text-white font-medium">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 rounded-md border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-300 bg-white"
                />
              </div>
              <div className="text-right">
                <label className="block mb-1 text-white font-medium">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 rounded-md border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-300 bg-white"
                />
              </div>
              <div className="text-right">
                <label className="block mb-1 text-white font-medium">Confirm Password</label>
                <input
                  type="password"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  className="w-full px-4 py-2 rounded-md border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-300 bg-white"
                />
              </div>
              {role === "seller" && (
                <>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <label className="block mb-1 text-green-800 font-medium">
                      Upload Verification Document
                    </label>
                    <input
                      type="file"
                      accept=".pdf,.jpg,.png"
                      onChange={(e) =>
                        setDoc(e.target.files ? e.target.files[0] : null)
                      }
                      className="block w-full text-sm text-green-900 bg-green-100 file:bg-white file:text-green-800 file:rounded file:px-4 file:py-1 cursor-pointer"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={agreed}
                      onChange={() => setAgreed(!agreed)}
                      className="h-4 w-4 text-green-600 border-green-300 rounded"
                    />
                    <label className="text-white text-sm">
                      I agree to the{" "}
                      <Link href="/terms" target="_blank" className="underline text-white hover:text-green-200">
                        Terms & Conditions
                      </Link>
                    </label>
                  </div>
                </>
              )}
              <button
                type="submit"
                className="w-full bg-black text-white text-lg font-bold py-3 rounded-xl hover:bg-gray-900 hover:scale-105 transition-all mt-2"
              >
                Register
              </button>
            </form>

            <div className="text-center mt-6">
              <button
                onClick={() => setRole("")}
                className="w-full bg-yellow text-green text-lg font-bold py-3 rounded-xl hover:bg-yellow-600 hover:scale-105 transition-all mt-2"
              >
                ← Go back
              </button>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
}
