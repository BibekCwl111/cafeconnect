"use client";

import { useState } from "react";

export default function UploadBox() {

  // =========================
  // Selected File State
  // =========================
  const [file, setFile] = useState<File | null>(null);

  // =========================
  // Print Options States
  // =========================
  const [copies, setCopies] = useState(1);

  const [printType, setPrintType] = useState("bw");

  const [printSide, setPrintSide] = useState("single");

  const [deliveryMethod, setDeliveryMethod] = useState("pickup");

  // =========================
  // Handle File Selection
  // =========================
  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {

    // No File Selected
    if (!event.target.files || !event.target.files[0]) {
      return;
    }

    const selectedFile = event.target.files[0];

    // Check PDF File
    if (selectedFile.type !== "application/pdf") {

      alert("Only PDF files are allowed!");

      return;
    }

    // Save File
    setFile(selectedFile);
  };

  // =========================
  // Remove Selected File
  // =========================
  const removeFile = () => {

    setFile(null);

  };

  return (

    <div className="max-w-3xl mx-auto bg-[#111] border border-gray-800 rounded-3xl p-10">

      {/* =========================
          Heading
      ========================= */}
      <div className="text-center">

        <h2 className="text-4xl font-bold">
          Upload Your PDF
        </h2>

        <p className="text-gray-400 mt-4">
          Upload documents for printing, xerox or form fill-up.
        </p>

      </div>

      {/* =========================
          Upload Area
      ========================= */}
      <div className="mt-10 border-2 border-dashed border-gray-700 rounded-2xl p-10 text-center">

        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          className="hidden"
          id="pdfUpload"
        />

        <label
          htmlFor="pdfUpload"
          className="cursor-pointer"
        >

          <div className="text-6xl">
            📄
          </div>

          <p className="mt-4 text-lg font-semibold">
            Click to Upload PDF
          </p>

          <p className="text-gray-500 text-sm mt-2">
            Only PDF files allowed
          </p>

        </label>

      </div>

      {/* =========================
          File Preview Section
      ========================= */}
      {file && (

        <div className="mt-8 bg-black border border-gray-800 rounded-2xl p-5">

          {/* =========================
              Top Section
          ========================= */}
          <div className="flex items-center justify-between">

            <div>

              <h3 className="text-xl font-semibold">
                Uploaded Successfully ✅
              </h3>

              <p className="text-gray-400 mt-1">
                Your PDF is ready for printing
              </p>

            </div>

            {/* Remove Button */}
            <button
              onClick={removeFile}
              className="bg-red-500 hover:bg-red-600 transition px-4 py-2 rounded-xl text-white font-medium"
            >
              Remove
            </button>

          </div>

          {/* =========================
              File Info Card
          ========================= */}
          <div className="mt-6 flex items-center justify-between bg-[#111] p-4 rounded-xl border border-gray-800">

            <div>

              <p className="font-medium">
                {file.name}
              </p>

              <p className="text-gray-400 text-sm mt-1">
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </p>

            </div>

            {/* File Icon */}
            <div className="text-4xl">
              📄
            </div>

          </div>

          {/* =========================
              Print Options
          ========================= */}
          <div className="mt-6 grid md:grid-cols-3 gap-4">

            {/* Copies */}
            <div>

              <label className="block text-sm text-gray-400 mb-2">
                Copies
              </label>

              <input
                type="number"
                min="1"
                value={copies}
                onChange={(e) => setCopies(Number(e.target.value))}
                className="w-full bg-[#111] border border-gray-700 rounded-xl px-4 py-3 outline-none"
              />

            </div>

            {/* Print Type */}
            <div>

              <label className="block text-sm text-gray-400 mb-2">
                Print Type
              </label>

              <select
                value={printType}
                onChange={(e) => setPrintType(e.target.value)}
                className="w-full bg-[#111] border border-gray-700 rounded-xl px-4 py-3 outline-none"
              >

                <option value="bw">
                  Black & White
                </option>

                <option value="color">
                  Color
                </option>

              </select>

            </div>

            {/* Print Side */}
            <div>

              <label className="block text-sm text-gray-400 mb-2">
                Print Side
              </label>

              <select
                value={printSide}
                onChange={(e) => setPrintSide(e.target.value)}
                className="w-full bg-[#111] border border-gray-700 rounded-xl px-4 py-3 outline-none"
              >

                <option value="single">
                  Single Side
                </option>

                <option value="double">
                  Double Side
                </option>

              </select>

            </div>

          </div>

          {/* =========================
              Delivary Method
          ========================= */}
           <div className="mt-6">

             <label className="block text-sm text-gray-400 mb-3">
                 Delivary Method
             </label>

             <div className="grid md:grid-cols-2 gap-4">

                {/* Self Pickup */}
                <button
                    onClick={() => setDeliveryMethod("pickup")}
                    className={`p-6 rounded-2x1 border cursor-pointer transition
                    ${
                        deliveryMethod == "pickup"
                        ? "border-green-500 bg-green-500/10"
                        : "border-gray-700 bg-[#111]"
                    }`}
                >

                <h3 className="text-lg front-semibold">
                     🏪 Self Pickup
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                    Collect from cafe
                </p>

                </button>

                {/* Home Delivery */}
                <button
                    onClick={() => setDeliveryMethod("delivery")}
                    className={`p-6 rounded-2x1 border cursor-pointer transition
                    ${
                        deliveryMethod == "delivery"
                        ? "border-green-500 bg-green-500/10"
                        : "border-gray-700 bg-[#111]"
                    }`}
                >

                <h3 className="text-lg front-semibold">
                     🏠 Home Delivery
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                    Delivered to your doorstep
                </p>

                </button>
             </div>
            </div>

          {/* =========================
              Price Calculation
          ========================= */}
          <div className="mt-6 bg-[#111] border border-gray-800 rounded-2xl p-5">

            {/* Top */}
            <div className="flex items-center justify-between">

              <h3 className="text-lg font-semibold">
                Estimated Price
              </h3>

              <p className="text-2xl font-bold text-green-400">

                ₹
                {
                    (
                        (
                            (
                                printType === "color"
                                ? 10
                                : 2
                            )

                            *

                            copies
                            
                            *

                            (
                                printSide === "double"
                                ? 1.5
                                : 1
                            )
                        )

                        +

                        (
                            deliveryMethod === "delivery"
                            ? 20
                            : 0
                        )
                    ).toFixed(0)
                }

              </p>

            </div>

            {/* Price Details */}
            <div className="mt-4 space-y-2 text-sm text-gray-400">

              <div className="flex items-center justify-between">

                <span>
                  Print Type
                </span>

                <span>
                  {printType === "color"
                    ? "Color Print"
                    : "Black & White"}
                </span>

              </div>

              <div className="flex items-center justify-between">

                <span>
                  Copies
                </span>

                <span>
                  {copies}
                </span>

              </div>

              <div className="flex items-center justify-between">

                <span>
                  Print Side
                </span>

                <span>
                  {printSide === "double"
                    ? "Double Side"
                    : "Single Side"}
                </span>

              </div>

              <div className="flex item-center justify-between">

                <span>
                    Delivery
                </span>

                <span>
                    {deliveryMethod === "delivery"
                    ? "Home Delivery (+₹20)"
                    :"Self Pickup"}
                </span>

              </div>

            </div>

          </div>

        </div>

      )}

    </div>

  );

}