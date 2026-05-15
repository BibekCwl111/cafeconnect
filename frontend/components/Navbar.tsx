"use client";

// =========================
// React Imports
// =========================
import { useEffect, useState } from "react";

// =========================
// Firebase Imports
// =========================
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth";

import { auth } from "../lib/firebase";

// =========================
// Components Imports
// =========================
import LoginModal from "./LoginModal";

export default function Navbar() {

  // =========================
  // Mobile Menu State
  // =========================
  const [menuOpen, setMenuOpen] = useState(false);

  // =========================
  // Login Modal State
  // =========================
  const [loginOpen, setLoginOpen] = useState(false);

  // =========================
  // Logged In User State
  // =========================
  const [user, setUser] = useState<User | null>(null);

  // =========================
  // Google Login Function
  // =========================
  const handleGoogleLogin = async () => {

    try {

      // Create Google Provider
      const provider = new GoogleAuthProvider();

      // Open Google Popup Login
      const result = await signInWithPopup(auth, provider);

      console.log("LOGIN SUCCESS:", result.user);

      // Close Login Modal
      setLoginOpen(false);

    } catch (error) {

      console.log("LOGIN ERROR:", error);

    }

  };

  // =========================
  // Logout Function
  // =========================
  const handleLogout = async () => {

    try {

      await signOut(auth);

      console.log("LOGOUT SUCCESS");

    } catch (error) {

      console.log("LOGOUT ERROR:", error);

    }

  };

  // =========================
  // Check User Login State
  // =========================
  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

      setUser(currentUser);

    });

    return () => unsubscribe();

  }, []);

  return (
    <>

      {/* =========================
          Navbar Section
      ========================= */}
      <nav className="border-b border-gray-800">

        <div className="flex items-center justify-between px-6 md:px-10 py-6">

          {/* =========================
              Logo
          ========================= */}
          <h1 className="text-2xl font-bold">
            CafeConnect
          </h1>

          {/* =========================
              Desktop Menu
          ========================= */}
          <div className="hidden md:flex items-center gap-6">

            <a href="#" className="hover:text-gray-400 transition">
              Home
            </a>

            <a href="#" className="hover:text-gray-400 transition">
              Services
            </a>

            <a href="#" className="hover:text-gray-400 transition">
              Cafes
            </a>

            {/* =========================
                If User Logged In
            ========================= */}
            {user ? (

              <div className="flex items-center gap-4">

                {/* User Image */}
                <img
                  src={user.photoURL || ""}
                  alt="User"
                  className="w-10 h-10 rounded-full border border-gray-700"
                />

                {/* User Name */}
                <p className="text-sm">
                  {user.displayName}
                </p>

                {/* Logout Button */}
                <button
                  onClick={handleLogout}
                  className="bg-red-500 px-4 py-2 rounded-xl"
                >
                  Logout
                </button>

              </div>

            ) : (

              // =========================
              // Login Button
              // =========================
              <button
                onClick={() => setLoginOpen(true)}
                className="bg-white text-black px-5 py-2 rounded-xl font-semibold"
              >
                Login
              </button>

            )}

          </div>

          {/* =========================
              Mobile Menu Button
          ========================= */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

        </div>

        {/* =========================
            Mobile Menu
        ========================= */}
        {menuOpen && (

          <div className="md:hidden flex flex-col gap-4 px-6 pb-6">

            <a href="#">Home</a>
            <a href="#">Services</a>
            <a href="#">Cafes</a>

            {/* =========================
                Mobile Logged In UI
            ========================= */}
            {user ? (

              <div className="flex flex-col gap-4">

                {/* User Name */}
                <p>
                  {user.displayName}
                </p>

                {/* Logout Button */}
                <button
                  onClick={handleLogout}
                  className="bg-red-500 px-5 py-2 rounded-xl"
                >
                  Logout
                </button>

              </div>

            ) : (

              // =========================
              // Mobile Login Button
              // =========================
              <button
                onClick={() => setLoginOpen(true)}
                className="bg-white text-black px-5 py-2 rounded-xl font-semibold"
              >
                Login
              </button>

            )}

          </div>

        )}

      </nav>

      {/* =========================
          Login Modal
      ========================= */}
      <LoginModal
        isOpen={loginOpen}
        onClose={() => setLoginOpen(false)}
        onGoogleLogin={handleGoogleLogin}
      />

    </>
  );
}