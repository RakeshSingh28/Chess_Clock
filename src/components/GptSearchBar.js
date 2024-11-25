import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const language = useSelector((store) => store.config.lang);
  return (
    <>
      <h1 className="font-bold text-3xl pt-[8%] text-center pb-4 text-red-600">
        Netflix-GPT
      </h1>
      <div className="flex justify-center">
        <form className="p-2 bg-gray-800 w-1/2 grid grid-cols-12">
          <input
            type="text"
            className="p-2 mr-2 col-span-10 rounded-md"
            placeholder={lang[language].placeholderText}
          />
          <button className=" text-white bg-red-600 p-2 rounded-md hover:bg-opacity-80 col-span-2">
            {lang[language].search}
          </button>
        </form>
      </div>
    </>
  );
};

export default GptSearchBar;
