import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, moviesData }) => {
  return (
    <div className="mx-4">
      <h1 className="text-2xl py-2 text-white">{title}</h1>
      <div className="flex overflow-x-auto scrollbar-hide">
        {moviesData?.length &&
          moviesData.map(
            (movie) =>
              movie.poster_path && (
                <MovieCard movieInfo={movie} key={movie.id} />
              )
          )}
      </div>
    </div>
  );
};

export default MovieList;
