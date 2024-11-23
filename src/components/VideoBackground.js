import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";

const VideoBackground = ({ movieId }) => {
  useTrailerVideo(movieId);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  return (
    <div className="bg-gray-600 w-screen absolute">
      <iframe
        className="w-screen h-screen"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?si=mx2RBnwroEsgCAXr&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; encrypted-media;"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
