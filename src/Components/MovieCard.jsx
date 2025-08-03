import React from "react";

export default function MovieCard({ movie }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <img
        className="w-full h-64 object-cover"
        src={movie.posterURL}
        alt={movie.title}
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{movie.title}</h3>
        <p className="text-gray-600 text-sm mb-3">{movie.description}</p>
        <p className="text-yellow-500 font-bold">Rating: {movie.rating}⭐</p>
      </div>
    </div>
  );
}