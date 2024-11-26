import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { searchText, movieSuggestions } = useSelector((store) => store.gpt);
  return (
    <div className="bg-opacity-45 bg-black">
      {searchText && (
        <MovieList
          title={"Searched for: '" + searchText + "'"}
          moviesData={movieSuggestions}
        ></MovieList>
      )}
    </div>
  );
};

export default GptMovieSuggestions;
