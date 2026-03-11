"use client";
import { useState } from "react";
import ImageUploader from "./components/ImageUploader";
import DiseaseResult from "./components/DiseaseResult";

export default function Home() {
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleUpload = async (file) => {
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
    setLoading(true);

    // Prepare form data for the backend
    const formData = new FormData();
    formData.append("image", file);

    try {
      // NOTE: Replace this URL with your actual backend endpoint when ready.
      // Currently using a mock timeout so the UI works beautifully out of the box
      // without needing backend changes immediately.
      /*
      const response = await fetch("http://localhost:5000/api/predict", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setResult(data);
      */

      // --- MOCK API RESPONSE ---
      setTimeout(() => {
        setResult({
          diseaseName: "Early Blight",
          confidence: 94.2,
          recommendation: "Ensure proper air circulation around the plants. Apply chlorothalonil or copper-based fungicides immediately to prevent spreading."
        });
        setLoading(false);
      }, 2000);
      // -------------------------

    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to analyze image. Please try again.");
      setLoading(false);
    }
  };

  const resetScanner = () => {
    setImageFile(null);
    setImagePreview(null);
    setResult(null);
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Identify Plant Diseases Instantly</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Upload a clear photo of the affected plant leaf, and our system will analyze it to detect potential diseases and provide actionable recommendations.
        </p>
      </div>

      {!imagePreview && !loading && (
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <ImageUploader onUpload={handleUpload} />
        </div>
      )}

      {loading && (
        <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100">
          <div className="w-16 h-16 border-4 border-green-200 border-t-green-600 rounded-full animate-spin mb-6"></div>
          <h3 className="text-xl font-semibold text-gray-700">Analyzing your leaf image...</h3>
          <p className="text-gray-500 mt-2">This usually takes just a few seconds.</p>
        </div>
      )}

      {result && !loading && (
        <DiseaseResult 
          result={result} 
          imagePreview={imagePreview} 
          onReset={resetScanner} 
        />
      )}
    </main>
  );
}