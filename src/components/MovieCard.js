import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ movieInfo }) => {
  return (
    <div className="flex-shrink-0 rounded-lg">
      <img
        className="w-44 pr-2 py-2 rounded-3xl"
        alt="Movie_Card"
        src={IMG_CDN_URL + movieInfo?.poster_path}
      />
      <p className="text-white text-lg font-bold w-44 pb-2">
        {movieInfo.title}
      </p>
    </div>
  );
};

export default MovieCard;
