"use client";

import { useState } from "react";

type UploadBoxProps = {
  selectedCafe: string;
};

export default function UploadBox({
  selectedCafe,
}: UploadBoxProps) {

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
  // Order Success State
  // =========================
  const [orderPlaced, setOrderPlaced] = useState(false);

  // =========================
  // Random Order ID
  // =========================
  const orderId = Math.floor(
    100000 + Math.random() * 900000
  );

  // =========================
  // Handle File Selection
  // =========================
  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {

    // No File Selected
    if (
      !event.target.files ||
      !event.target.files[0]
    ) {
      return;
    }

    const selectedFile = event.target.files[0];

    // Check PDF File
    if (
      selectedFile.type !==
      "application/pdf"
    ) {

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

  // =========================
  // Price Calculation
  // =========================
  const basePrice =
    printType === "color"
      ? 15
      : 5;

  const sideExtra =
    printSide === "double"
      ? 2
      : 0;

  const deliveryCharge =
    deliveryMethod === "delivery"
      ? 20
      : 0;

  const totalPrice =
    (basePrice + sideExtra) *
      copies +
    deliveryCharge;

  // =========================
  // Handle Order Placement
  // =========================
  const handlePlaceOrder = () => {

    // No Cafe Selected
    if (!selectedCafe) {

      alert(
        "Please select a cafe first!"
      );

      return;
    }

    // No File Uploaded
    if (!file) {

      alert(
        "Please upload a PDF file!"
      );

      return;
    }

    // Order Success
    setOrderPlaced(true);
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
          Upload documents for printing,
          xerox or form fill-up.
        </p>

      </div>

      {/* =========================
          Selected Cafe Alert
      ========================= */}
      {selectedCafe && (

        <div className="mt-8 bg-green-500/10 border border-green-500 rounded-2xl p-4">

          <p className="text-green-400 font-medium">

            Selected Cafe:
            {" "}
            {selectedCafe}

          </p>

        </div>

      )}

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

        <div className="mt-8 bg-black border border-gray-800 rounded-2xl p-6">

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
              className="bg-red-500 hover:bg-red-600 transition px-4 py-2 rounded-xl"
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

                {(file.size / 1024 / 1024).toFixed(2)}
                {" "}
                MB

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
          <div className="mt-8 grid md:grid-cols-3 gap-4">

            {/* Copies */}
            <div>

              <label className="block mb-2 text-sm text-gray-400">
                Copies
              </label>

              <input
                type="number"
                min="1"
                value={copies}
                onChange={(e) =>
                  setCopies(
                    Number(e.target.value)
                  )
                }
                className="w-full bg-[#111] border border-gray-700 rounded-xl px-4 py-3 outline-none"
              />

            </div>

            {/* Print Type */}
            <div>

              <label className="block mb-2 text-sm text-gray-400">
                Print Type
              </label>

              <select
                value={printType}
                onChange={(e) =>
                  setPrintType(
                    e.target.value
                  )
                }
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

              <label className="block mb-2 text-sm text-gray-400">
                Print Side
              </label>

              <select
                value={printSide}
                onChange={(e) =>
                  setPrintSide(
                    e.target.value
                  )
                }
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
              Delivery Method
          ========================= */}
          <div className="mt-8">

            <h3 className="text-lg font-semibold mb-4">
              Delivery Method
            </h3>

            <div className="grid md:grid-cols-2 gap-4">

              {/* Pickup Option */}
              <button
                onClick={() =>
                  setDeliveryMethod(
                    "pickup"
                  )
                }
                className={`border rounded-2xl p-6 text-left transition ${
                  deliveryMethod ===
                  "pickup"
                    ? "border-green-500 bg-green-500/10"
                    : "border-gray-700 bg-[#111]"
                }`}
              >

                <div className="text-3xl">
                  🏪
                </div>

                <h4 className="text-xl font-semibold mt-4">
                  Self Pickup
                </h4>

                <p className="text-gray-400 mt-2">
                  Collect from cafe
                </p>

              </button>

              {/* Delivery Option */}
              <button
                onClick={() =>
                  setDeliveryMethod(
                    "delivery"
                  )
                }
                className={`border rounded-2xl p-6 text-left transition ${
                  deliveryMethod ===
                  "delivery"
                    ? "border-green-500 bg-green-500/10"
                    : "border-gray-700 bg-[#111]"
                }`}
              >

                <div className="text-3xl">
                  🏠
                </div>

                <h4 className="text-xl font-semibold mt-4">
                  Home Delivery
                </h4>

                <p className="text-gray-400 mt-2">
                  Delivered to your doorstep
                </p>

              </button>

            </div>

          </div>

          {/* =========================
              Price Summary
          ========================= */}
          <div className="mt-8 bg-[#111] border border-gray-800 rounded-2xl p-6">

            <div className="flex items-center justify-between">

              <h3 className="text-2xl font-bold">
                Estimated Price
              </h3>

              <div className="text-4xl font-bold text-green-400">
                ₹{totalPrice}
              </div>

            </div>

            <div className="mt-6 space-y-3">

              <div className="flex items-center justify-between">

                <span className="text-gray-400">
                  Print Type
                </span>

                <span>
                  {printType === "color"
                    ? "Color Print"
                    : "Black & White"}
                </span>

              </div>

              <div className="flex items-center justify-between">

                <span className="text-gray-400">
                  Copies
                </span>

                <span>
                  {copies}
                </span>

              </div>

              <div className="flex items-center justify-between">

                <span className="text-gray-400">
                  Print Side
                </span>

                <span>
                  {printSide === "double"
                    ? "Double Side"
                    : "Single Side"}
                </span>

              </div>

              <div className="flex items-center justify-between">

                <span className="text-gray-400">
                  Delivery
                </span>

                <span>

                  {deliveryMethod ===
                  "delivery"
                    ? "Home Delivery (+₹20)"
                    : "Self Pickup"}

                </span>

              </div>

            </div>

          </div>

          {/* =========================
              Place Order Button
          ========================= */}
          <button
            onClick={handlePlaceOrder}
            className="w-full mt-6 bg-green-500 hover:bg-green-600 transition text-black font-bold py-4 rounded-2xl"
          >
            Place Order
          </button>

        </div>

      )}

      {/* =========================
          Success Modal
      ========================= */}
      {orderPlaced && (

        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">

          <div className="bg-[#111] border border-green-500 rounded-3xl p-10 max-w-md w-full text-center">

            {/* Icon */}
            <div className="text-6xl">
              ✅
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-bold mt-6">
              Order Placed Successfully!
            </h2>

            <p className="text-gray-400 mt-3">
              Your print order has been submitted.
            </p>

            {/* Order Details */}
            <div className="mt-8 bg-black rounded-2xl p-5 border border-gray-800 text-left">

              <p className="text-gray-400 text-sm">
                Order ID
              </p>

              <h3 className="text-2xl font-bold mt-1">
                #{orderId}
              </h3>

              <div className="mt-5 space-y-3">

                <div className="flex items-center justify-between">

                  <span className="text-gray-400">
                    Cafe
                  </span>

                  <span>
                    {selectedCafe}
                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-gray-400">
                    Delivery
                  </span>

                  <span>

                    {deliveryMethod ===
                    "delivery"
                      ? "Home Delivery"
                      : "Self Pickup"}

                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-gray-400">
                    Total
                  </span>

                  <span className="text-green-400 font-bold">
                    ₹{totalPrice}
                  </span>

                </div>

              </div>

            </div>

            {/* Close Button */}
            <button
              onClick={() =>
                setOrderPlaced(false)
              }
              className="w-full mt-8 bg-white text-black py-3 rounded-2xl font-semibold"
            >
              Done
            </button>

          </div>

        </div>

      )}

    </div>

  );

}