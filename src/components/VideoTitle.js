import React from "react";

const VideoTitle = ({ title, description }) => {
  return (
    <div className="pt-[400px] md:pt-[300px] pl-[5%] relative text-white bg-gradient-to-r h-screen from-black">
      <h2 className="text-5xl font-bold mb-2 md:m-0">{title}</h2>
      <p className="py-4 text-lg w-2/5 hidden md:block">{description}</p>
      <div className="flex">
        <button className="w-24 bg-white text-lg font-bold py-1 mr-3 rounded-sm text-black hover:bg-opacity-80">
          ▶ Play
        </button>
        <button className="w-36 text-white bg-gray-400 font-bold py-1 rounded-sm bg-opacity-50 hover:bg-opacity-60">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
