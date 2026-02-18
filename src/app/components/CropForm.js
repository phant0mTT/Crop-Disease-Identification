"use client";
import { useState } from "react";

export default function CropForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    crop: "",
    soilType: "",
    season: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Crop Type</label>
        <input
          type="text"
          name="crop"
          value={formData.crop}
          onChange={handleChange}
          placeholder="e.g., Rice, Wheat, Maize"
          className="w-full p-2 border rounded-lg bg-gray-50 dark:bg-zinc-800"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Soil Type</label>
        <select
          name="soilType"
          value={formData.soilType}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg bg-gray-50 dark:bg-zinc-800"
          required
        >
          <option value="">Select Soil Type</option>
          <option value="Clay">Clay</option>
          <option value="Loamy">Loamy</option>
          <option value="Sandy">Sandy</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Season</label>
        <select
          name="season"
          value={formData.season}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg bg-gray-50 dark:bg-zinc-800"
          required
        >
          <option value="">Select Season</option>
          <option value="Kharif">Kharif</option>
          <option value="Rabi">Rabi</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
      >
        Get Recommendation
      </button>
    </form>
  );
}

