const Game = () => {
  return (
    <div className="flex items-center flex-col h-full justify-center">
      <div className="text-gray-400 flex justify-between w-60">
        <div className="text-3xl m-1 cursor-pointer">▶</div>
        <div className="text-2xl m-1 cursor-pointer">▐▐</div>
        <div className="text-4xl m-1 cursor-pointer">↻</div>
        <div className="text-4xl m-1 cursor-pointer">✖</div>
      </div>
      <div className="w-56 h-56 bg-gray-500 rounded-2xl m-4 mb-2 cursor-pointer">
        <div className="flex h-56 justify-center items-center text-3xl font-bold text-black">
          10:00
        </div>
      </div>
      <div className="w-56 h-56 bg-gray-500 rounded-2xl m-4 mb-2 cursor-pointer">
        <div className="flex h-56 justify-center items-center text-3xl font-bold text-black">
          10:00
        </div>
      </div>
    </div>
  );
};

export default Game;
