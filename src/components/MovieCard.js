import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ movieInfo }) => {
  return (
    <div className="flex-shrink-0 rounded-lg">
      <img
        className="w-44 pr-2 py-2 rounded-3xl cursor-pointer"
        alt="Movie_Card"
        src={IMG_CDN_URL + movieInfo?.poster_path}
      />
      <div className="relative bottom-10 left-1 pl-2 text-lg bg-black text-white w-7 rounded-lg bg-opacity-50">
        ▶
      </div>
      <p className="text-white text-lg w-44 pb-2 -mt-8">{movieInfo.title}</p>
    </div>
  );
};

export default MovieCard;
