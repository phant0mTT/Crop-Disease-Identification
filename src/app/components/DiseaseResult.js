"use client";
import React from "react";

export default function DiseaseResult({ result, imagePreview, onReset }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 animate-fade-in-up">
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Image Preview */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-inner border border-gray-100">
            <img 
              src={imagePreview} 
              alt="Uploaded Leaf" 
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Prediction Data */}
        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6">
          <div>
            <h2 className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-1">Detected Disease</h2>
            <h3 className="text-3xl font-bold text-green-800">{result.diseaseName}</h3>
          </div>
          
          <div>
            <h2 className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-2">Confidence Level</h2>
            <div className="flex items-center gap-4">
              <div className="flex-1 bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-green-500 h-3 rounded-full" 
                  style={{ width: `${result.confidence}%` }}
                ></div>
              </div>
              <span className="font-semibold text-gray-700">{result.confidence}%</span>
            </div>
          </div>

          <div className="bg-green-50 rounded-xl p-4 border border-green-100 mt-4">
            <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              Recommendation
            </h4>
            <p className="text-sm text-green-700 leading-relaxed">
              {result.recommendation || "Please consult a local agricultural expert for proper pesticide or treatment recommendations tailored to your specific crop."}
            </p>
          </div>

          <button
            onClick={onReset}
            className="w-full py-3 px-4 bg-white border-2 border-green-500 text-green-600 font-semibold rounded-lg shadow-sm hover:bg-green-50 transition-colors mt-4"
          >
            Scan Another Plant
          </button>
        </div>
      </div>
    </div>
  );
}