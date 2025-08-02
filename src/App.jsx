import React, { useState, useEffect } from "react";
import MovieList from "./Components/MovieList";
import Filter from "./Components/Filter";

function isValidURL(string) {
  try {
    new URL(string);
    return true;
  } catch {
    return false;
  }
}

export default function App() {
  const [movies, setMovies] = useState(() => {
    const saved = localStorage.getItem("movies");
    return saved
      ? JSON.parse(saved)
      : [
          {
            title: "Inception",
            description: "A thief who steals corporate secrets...",
            posterURL:
              "/img/inception.jpg",
            rating: 5,
          },
          {
            title: "Interstellar",
            description: "A team of explorers travel through a wormhole...",
            posterURL:
              "img/inste.webp",
            rating: 4,
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");

  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 1,
  });

  const filteredMovies = movies.filter((movie) => {
    const matchesTitle = movie.title
      .toLowerCase()
      .includes(titleFilter.toLowerCase());
    const matchesRating = ratingFilter ? movie.rating >= Number(ratingFilter) : true;
    return matchesTitle && matchesRating;
  });

  function handleAddMovie(e) {
    e.preventDefault();
    const { title, description, posterURL, rating } = newMovie;

    if (title.trim().length < 2) {
      alert("Title should be at least 2 characters");
      return;
    }
    if (description.trim().length < 10) {
      alert("Description should be at least 10 characters");
      return;
    }
    if (!isValidURL(posterURL)) {
      alert("Poster URL is invalid");
      return;
    }
    if (rating < 1 || rating > 5) {
      alert("Rating must be between 1 and 5");
      return;
    }

    setMovies([...movies, newMovie]);
    setNewMovie({ title: "", description: "", posterURL: "", rating: 1 });
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center">My Movie App</h1>

      <Filter
        titleFilter={titleFilter}
        setTitleFilter={setTitleFilter}
        ratingFilter={ratingFilter}
        setRatingFilter={setRatingFilter}
      />

      <form
        onSubmit={handleAddMovie}
        className="mt-8 bg-gray-100 p-6 rounded-md space-y-4"
      >
        <h2 className="text-xl font-semibold">Add a New Movie</h2>

        <input
          type="text"
          placeholder="Title"
          value={newMovie.title}
          onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
          className="w-full border rounded px-3 py-2"
        />
        <input
          type="text"
          placeholder="Description"
          value={newMovie.description}
          onChange={(e) =>
            setNewMovie({ ...newMovie, description: e.target.value })
          }
          className="w-full border rounded px-3 py-2"
        />
        <input
          type="text"
          placeholder="Poster URL"
          value={newMovie.posterURL}
          onChange={(e) =>
            setNewMovie({ ...newMovie, posterURL: e.target.value })
          }
          className="w-full border rounded px-3 py-2"
        />
        <select
          value={newMovie.rating}
          onChange={(e) =>
            setNewMovie({ ...newMovie, rating: Number(e.target.value) })
          }
          className="w-full border rounded px-3 py-2"
        >
          {[1, 2, 3, 4, 5].map((r) => (
            <option key={r} value={r}>
              {r} Star{r > 1 ? "s" : ""}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Movie
        </button>
      </form>

      <MovieList movies={filteredMovies} />
    </div>
  );
}