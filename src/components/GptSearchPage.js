import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { NETFLIX_BG } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <img
        className="brightness-50 w-screen h-screen absolute -z-10"
        src={NETFLIX_BG}
        alt="netflix-bg"
      />
      <GptSearchBar/>
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
