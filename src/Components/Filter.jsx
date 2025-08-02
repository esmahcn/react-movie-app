import React from "react";

export default function Filter({ titleFilter, setTitleFilter, ratingFilter, setRatingFilter }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center mt-6">
      <input
        type="text"
        placeholder="Search by title..."
        value={titleFilter}
        onChange={(e) => setTitleFilter(e.target.value)}
        className="border rounded px-3 py-2 w-full sm:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <select
        value={ratingFilter}
        onChange={(e) => setRatingFilter(e.target.value)}
        className="border rounded px-3 py-2 w-full sm:w-1/4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">All Ratings</option>
        <option value="5">5 Stars</option>
        <option value="4">4 Stars & Up</option>
        <option value="3">3 Stars & Up</option>
        <option value="2">2 Stars & Up</option>
        <option value="1">1 Star & Up</option>
      </select>
      <button
        onClick={() => {
          setTitleFilter("");
          setRatingFilter("");
        }}
        className="ml-0 sm:ml-4 bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 transition"
      >
        Clear Filters
      </button>
    </div>
  );
}