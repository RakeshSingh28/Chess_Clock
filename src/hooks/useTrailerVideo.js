import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const jsonData = await data.json();
    const trailer = jsonData.results.filter(
      (video) => video.type === "Trailer" && video.name === "Official Trailer"
    );
    dispatch(addTrailerVideo(trailer[0]));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};
export default useTrailerVideo;
