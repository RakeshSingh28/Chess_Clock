import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addSearchedMovies } from "../utils/gptSlice";

const GptSearchBar = () => {
  const language = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const handleGPTSearch = async () => {
    const gptResults = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        searchText.current.value,
      API_OPTIONS
    );
    const jsonData = await gptResults.json();
    dispatch(
      addSearchedMovies({
        searchedText: searchText.current.value,
        movies: jsonData.results,
      })
    );
  };
  return (
    <>
      <h1 className="font-bold text-3xl pt-[150px] text-center pb-4 text-red-600">
        Netflix-GPT
      </h1>
      <div className="flex justify-center">
        <form
          className="p-2 md:w-1/2 w-full grid grid-cols-12 rounded-lg"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            ref={searchText}
            className="p-2 mr-2 col-span-10 rounded-md"
            placeholder={lang[language].placeholderText}
          />
          <button
            className=" text-white bg-red-600 p-2 rounded-md hover:bg-opacity-80 col-span-2"
            onClick={handleGPTSearch}
          >
            {lang[language].search}
          </button>
        </form>
      </div>
    </>
  );
};

export default GptSearchBar;
