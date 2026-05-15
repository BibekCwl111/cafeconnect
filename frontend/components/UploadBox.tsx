"use client";

import { useState } from "react";

export default function UploadBox() {

  const [fileName, setFileName] = useState("");
  const [dragActive, setDragActive] = useState(false);

  
  const handleFile = (file: File) => {
    setFileName(file.name);
  };

  
  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {

    const file = event.target.files?.[0];

    if (file) {
      handleFile(file);
    }

  };

  
  const handleDragOver = (
    event: React.DragEvent<HTMLDivElement>
  ) => {

    event.preventDefault();
    setDragActive(true);

  };

  
  const handleDragLeave = () => {
    setDragActive(false);
  };

  
  const handleDrop = (
    event: React.DragEvent<HTMLDivElement>
  ) => {

    event.preventDefault();

    setDragActive(false);

    const file = event.dataTransfer.files?.[0];

    if (file) {
      handleFile(file);
    }

  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`border-2 border-dashed rounded-3xl p-10 text-center transition
      ${dragActive
          ? "border-white bg-[#1a1a1a]"
          : "border-gray-700 bg-[#111]"
        }`}
    >

      <h2 className="text-3xl font-bold">
        Upload Your Documents
      </h2>

      <p className="text-gray-400 mt-4">
        Upload PDFs, images, Aadhaar, photos and other documents.
      </p>

      <div className="mt-8">

        <input
          type="file"
          className="hidden"
          id="fileUpload"
          onChange={handleFileChange}
        />

        <label
          htmlFor="fileUpload"
          className="bg-white text-black px-6 py-3 rounded-xl font-semibold cursor-pointer inline-block"
        >
          Choose File
        </label>

      </div>

      <p className="text-gray-500 mt-5">
        or drag & drop files here
      </p>

      {fileName && (
        <p className="mt-6 text-green-400">
          Selected File: {fileName}
        </p>
      )}

    </div>
  );
}