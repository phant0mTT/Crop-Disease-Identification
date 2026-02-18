"use client";

import { useState } from "react";
import CropForm from "../components/CropForm";
import RecommendationResult from "../components/RecommendationResult";
import { getRecommendation } from "../services/api";

export default function RecommendPage() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (data) => {
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await getRecommendation(data);
      if (res.message) {
        setError(res.message);
      } else {
        setResult(res);
      }
    } catch (err) {
      setError("Server error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-green-50 dark:bg-black text-gray-800 dark:text-gray-200 pt-32 px-6">
      <div className="max-w-6xl mx-auto">

        {/* PAGE HEADER */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-green-700 dark:text-green-400 mb-3">
            Recommendation Engine
          </h1>
          <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
            This module collects crop, soil, and seasonal data and applies
            predefined agricultural rules to generate fertilizer and pesticide
            recommendations.
          </p>
        </div>

        {/* STEP INDICATOR */}
        <div className="grid grid-cols-3 gap-4 mb-12 text-sm text-center">
          <div className="p-3 rounded-lg bg-white dark:bg-zinc-900 shadow">
            1️⃣ Enter Crop Details
          </div>
          <div className="p-3 rounded-lg bg-white dark:bg-zinc-900 shadow">
            2️⃣ Rule Matching
          </div>
          <div className="p-3 rounded-lg bg-white dark:bg-zinc-900 shadow">
            3️⃣ View Recommendation
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-3 gap-8">

          {/* FORM */}
          <div className="lg:col-span-1 bg-white dark:bg-zinc-900 rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-green-600 mb-4">
              Input Parameters
            </h2>
            <CropForm onSubmit={handleSubmit} />
          </div>

          {/* RESULT */}
          <div className="lg:col-span-2 bg-white dark:bg-zinc-900 rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-green-600 mb-4">
              System Output
            </h2>

            {/* STATES */}
            {loading && (
              <div className="text-sm text-gray-500">
                Processing input and applying rules...
              </div>
            )}

            {!loading && !result && !error && (
              <div className="text-sm text-gray-500">
                No recommendation generated yet.
                <br />
                Fill the form and submit to continue.
              </div>
            )}

            {error && (
              <div className="text-sm text-red-500">
                {error}
              </div>
            )}

            {result && (
              <RecommendationResult data={result} />
            )}
          </div>
        </div>

        {/* INFO SECTION */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow">
            <h3 className="font-semibold text-green-600 mb-2">
              How recommendations are generated
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              The system compares user input against a predefined dataset of
              crop–soil–season rules. If a match is found, the corresponding
              fertilizer and pesticide suggestions are returned.
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow">
            <h3 className="font-semibold text-green-600 mb-2">
              Limitations
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              This is an advisory system only. It does not perform real-time soil
              testing, disease detection, or yield prediction.
            </p>
          </div>
        </div>

        {/* FOOTER NOTE */}
        <p className="text-center text-xs text-gray-500 mt-14">
          Crop & Plant Nutrient Recommendation System · MERN Stack · Academic Use
        </p>
      </div>
    </div>
  );
}
