import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ movieInfo }) => {
  return (
    <div>
      <img
        className="w-48 p-1"
        alt="Movie_Card"
        src={IMG_CDN_URL + movieInfo?.poster_path}
      />
    </div>
  );
};

export default MovieCard;
