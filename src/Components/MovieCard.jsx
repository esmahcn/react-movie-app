import React from "react";

export default function MovieCard({ movie }) {
  return (
    <div className="bg-white shadow-md rounded-md p-4 max-w-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer">
      <img
        src={movie.posterURL}
        alt={movie.title}
        className="w-full h-64 object-cover rounded-md"
      />
      <h2 className="text-xl font-bold mt-4">{movie.title}</h2>
      <p className="text-gray-600 mt-2">{movie.description}</p>
      <p className="mt-3 font-semibold">Rating: {movie.rating} / 5</p>
    </div>
  );
}
