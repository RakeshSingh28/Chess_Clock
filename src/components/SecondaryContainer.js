import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      <div className="relative -mt-20 px-4">
        <MovieList
          title={"Now Playing"}
          moviesData={movies.nowPlayingMovies}
        ></MovieList>
        <MovieList
          title={"Top Rated"}
          moviesData={movies.topRatedMovies}
        ></MovieList>
        <MovieList
          title={"Popular"}
          moviesData={movies.popularMovies}
        ></MovieList>
        <MovieList
          title={"Upcoming"}
          moviesData={movies.upcomingMovies}
        ></MovieList>
      </div>
    </div>
  );
};

export default SecondaryContainer;
