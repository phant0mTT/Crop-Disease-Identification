"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  // Apply theme to <html>
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return (
    // ✅ THIS is the correct place for dark/light wrapper
    <div className="min-h-screen bg-green-50 dark:bg-black text-gray-800 dark:text-gray-200 transition-colors">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-white dark:bg-zinc-900 shadow z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* HAMBURGER */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl font-bold"
          >
            ☰
          </button>

          {/* TITLE */}
          <h1 className="text-xl font-bold text-green-700 dark:text-green-400">
            CropCare Advisor
          </h1>

          {/* LINKS */}
          <div className="flex gap-6 text-sm font-medium">
            <a href="#about">About</a>
            <a href="#features">Features</a>
            <a href="#workflow">Workflow</a>
            <a href="#scope">Scope</a>
            <Link
              href="/recommend"
              className="text-green-700 dark:text-green-400 font-semibold"
            >
              Try Now
            </Link>
          </div>
        </div>

        {/* HAMBURGER MENU (LEFT, LIMITED WIDTH) */}
        {menuOpen && (
          <div className="absolute left-0 top-full w-64 bg-white dark:bg-zinc-900 shadow-lg border-r animate-slideDown">
            <div className="flex flex-col p-4 gap-4 text-sm">
              <button
                onClick={() =>
                  setTheme(theme === "light" ? "dark" : "light")
                }
                className="text-left"
              >
                {theme === "light" ? "🌙 Dark Mode" : "☀ Light Mode"}
              </button>
              <button className="text-left">⚙ Settings</button>
              <button className="text-left">ℹ Project Info</button>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-24 bg-green-100 dark:bg-zinc-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Crop & Plant Disease Identification System
          </h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            A rule-based platform that helps to identify diseases or problems of crops or plants and suggests cure.
          </p>
          <Link
            href="/recommend"
            className="px-8 py-4 bg-green-600 text-white rounded-lg font-semibold"
          >
            Get Recommendation
          </Link>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-6">About the Project</h3>
          <p className="max-w-4xl leading-7">
            This system helps farmers and plant growers by providing structured
            recommendations for fertilizers and pesticides using predefined
            agricultural rules and datasets.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-20 bg-green-50 dark:bg-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-10">Key Features</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Crop, Soil & Season Input",
              "Rule-Based Recommendation Engine",
              "Instant Advisory Output",
              "User-Friendly Interface",
              "Scalable MERN Architecture",
              "Academic Project Ready",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section id="workflow" className="py-20 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-10">System Workflow</h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {["User Input", "Rule Matching", "Processing", "Recommendation"].map(
              (step, i) => (
                <div key={i} className="border rounded-lg p-6">
                  <h4 className="font-semibold mb-2">Step {i + 1}</h4>
                  <p>{step}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* SCOPE */}
      <section id="scope" className="py-20 bg-green-50 dark:bg-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-6">Project Scope</h3>
          <ul className="list-disc ml-6 space-y-2 max-w-4xl">
            <li>Advisory recommendations only</li>
            <li>No real-time soil or weather analysis</li>
            <li>No yield prediction</li>
            <li>Designed for academic evaluation</li>
          </ul>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-green-700 dark:bg-zinc-900 text-white py-6">
        <div className="max-w-6xl mx-auto px-6 flex justify-between text-sm">
          <p>© 2026 CropCare Advisor</p>
          <p>MERN Stack Mini Project</p>
        </div>
      </footer>

      {/* ANIMATION */}
      <style jsx>{`
        .animate-slideDown {
          animation: slideDown 0.2s ease-out;
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
