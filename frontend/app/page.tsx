"use client";

// =========================
// React Imports
// =========================
import { useState } from "react";

// =========================
// Components Imports
// =========================
import CafeCard from "../components/CafeCard";
import Navbar from "../components/Navbar";
import ServiceCard from "../components/ServiceCard";
import StatsCard from "../components/StatsCard";
import UploadBox from "../components/UploadBox";

export default function Home() {

  // =========================
  // Selected Cafe State
  // =========================
  const [selectedCafe, setSelectedCafe] = useState("");

  return (

    <main className="min-h-screen text-white bg-black relative overflow-hidden">

      {/* =========================
          Navbar
      ========================= */}
      <Navbar />

      {/* =========================
          Background Glow Effects
      ========================= */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-purple-500 rounded-full blur-[120px] opacity-20"></div>

      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-blue-500 rounded-full blur-[120px] opacity-20"></div>

      {/* =========================
          Hero Section
      ========================= */}
      <section className="flex flex-col items-center justify-center text-center mt-40 px-4">

        <h1 className="text-6xl font-bold leading-tight">
          Print, Xerox & <br /> Form Fill-up Online
        </h1>

        <p className="mt-6 text-gray-400 max-w-2xl text-lg">
          Upload documents, choose nearby cafes, and get your work done without waiting in long lines.
        </p>

        {/* Hero Buttons */}
        <div className="flex gap-4 mt-8">

          <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold">
            Get Started
          </button>

          <button className="border border-gray-700 px-6 py-3 rounded-xl">
            Explore Cafes
          </button>

        </div>

      </section>

      {/* =========================
          Services Section
      ========================= */}
      <section className="px-10 mt-40">

        <div className="text-center mb-14">

          <h2 className="text-5xl font-bold">
            Our Services
          </h2>

          <p className="text-gray-400 mt-4">
            Everything you need from nearby cafes in one place.
          </p>

        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6">

          <ServiceCard
            title="Online Print"
            description="Upload PDF files and get printouts without standing in long queues."
          />

          <ServiceCard
            title="Form Fill-up"
            description="Submit documents online and let cafe owners complete your forms."
          />

          <ServiceCard
            title="Home Delivery"
            description="Get printed documents delivered directly to your home."
          />

        </div>

      </section>

      {/* =========================
          Nearby Cafes Section
      ========================= */}
      <section className="px-10 mt-40">

        {/* Section Header */}
        <div className="flex items-center justify-between mb-10">

          <h2 className="text-4xl font-bold">
            Nearby Cafes
          </h2>

          <button className="border border-gray-700 px-5 py-2 rounded-xl">
            View All
          </button>

        </div>

        {/* Cafe Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* Cafe 1 */}
          <CafeCard
            name="Print Hub"
            location="Naksalbari, Darjeeling"
            rating="4.8"
            distance="1.2 km"
            isOpen={true}
            selected={selectedCafe === "Print Hub"}
            onSelect={() => setSelectedCafe("Print Hub")}
          />

          {/* Cafe 2 */}
          <CafeCard
            name="Cyber Point"
            location="Siliguri"
            rating="4.6"
            distance="2.8 km"
            isOpen={true}
            selected={selectedCafe === "Cyber Point"}
            onSelect={() => setSelectedCafe("Cyber Point")}
          />

          {/* Cafe 3 */}
          <CafeCard
            name="Smart Cafe"
            location="Bagdogra"
            rating="4.9"
            distance="4.5 km"
            isOpen={false}
            selected={selectedCafe === "Smart Cafe"}
            onSelect={() => setSelectedCafe("Smart Cafe")}
          />

        </div>

        {/* Selected Cafe Message */}
        {selectedCafe && (

          <div className="mt-8 bg-green-500/10 border border-green-500 rounded-2xl p-5">

            <p className="text-green-400 text-lg font-medium">
              Selected Cafe: {selectedCafe}
            </p>

          </div>

        )}

      </section>

      {/* =========================
          Stats Section
      ========================= */}
      <section className="px-10 mt-40 pb-32">

        <div className="text-center mb-14">

          <h2 className="text-5xl font-bold">
            Trusted By Thousands
          </h2>

          <p className="text-gray-400 mt-4">
            Fast, reliable and easy cafe services.
          </p>

        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6">

          <StatsCard
            number="500+"
            label="Orders Completed"
          />

          <StatsCard
            number="50+"
            label="Partner Cafes"
          />

          <StatsCard
            number="24/7"
            label="Customer Support"
          />

        </div>

      </section>

      {/* =========================
          Upload Section
      ========================= */}
      <section className="px-10 mt-40 pb-32">

        <UploadBox
          selectedCafe={selectedCafe}
        />

      </section>

    </main>

  );

}