import React from "react";
import MovieCard from "./MovieCard";

export default function MovieList({ movies }) {
  if (movies.length === 0) {
    return <p className="text-center text-gray-500 mt-6">No movies found.</p>;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
      {movies.map((movie) => (
        <MovieCard key={movie.title} movie={movie} />
      ))}
    </div>
  );
}