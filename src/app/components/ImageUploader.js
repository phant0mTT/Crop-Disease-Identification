"use client";
import React, { useCallback, useState } from "react";

export default function ImageUploader({ onUpload }) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      onUpload(files[0]);
    }
  }, [onUpload]);

  const handleChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      onUpload(e.target.files[0]);
    }
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-colors duration-300 ${
        isDragging
          ? "border-green-500 bg-green-50"
          : "border-gray-300 hover:border-green-400 hover:bg-gray-50"
      }`}
    >
      <input
        type="file"
        accept="image/jpeg, image/png, image/jpg"
        onChange={handleChange}
        className="hidden"
        id="file-upload"
      />
      <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center">
        <svg
          className="w-16 h-16 text-green-500 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
        </svg>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Upload Leaf Image</h3>
        <p className="text-gray-500 text-sm">Drag and drop your image here, or click to browse.</p>
        <p className="text-xs text-gray-400 mt-2">Supported formats: JPG, PNG, JPEG</p>
      </label>
    </div>
  );
}