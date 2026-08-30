import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const formatTime = (totalSeconds) => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
};

const Game = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const initialState = location.state || {};
  const initialMinutes = Number(initialState.player1Time || 10);
  const initialSeconds = Number(initialState.p1Sec || 0);
  const initialBlackMinutes = Number(
    initialState.player2Time || initialMinutes,
  );
  const initialBlackSeconds = Number(initialState.p2Sec || initialSeconds);
  const initialWhiteTime = initialMinutes * 60 + initialSeconds;
  const initialBlackTime = initialBlackMinutes * 60 + initialBlackSeconds;

  const [whiteTime, setWhiteTime] = useState(initialWhiteTime);
  const [blackTime, setBlackTime] = useState(initialBlackTime);
  const [activeClock, setActiveClock] = useState(null);

  useEffect(() => {
    if (!activeClock) {
      return undefined;
    }

    const timerId = setInterval(() => {
      if (activeClock === "white") {
        setWhiteTime((previousTime) => {
          if (previousTime <= 1) {
            setActiveClock(null);
            return 0;
          }

          return previousTime - 1;
        });
        return undefined;
      }

      setBlackTime((previousTime) => {
        if (previousTime <= 1) {
          setActiveClock(null);
          return 0;
        }

        return previousTime - 1;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [activeClock]);

  const handlePlay = () => {
    if (activeClock === null) {
      setActiveClock("white");
    }
  };

  const handlePause = () => {
    setActiveClock(null);
  };

  const handleReset = () => {
    setActiveClock(null);
    setWhiteTime(initialWhiteTime);
    setBlackTime(initialBlackTime);
  };

  const handleExit = () => {
    navigate("/");
  };

  const handleWhiteClockClick = () => {
    if (!activeClock) {
      setActiveClock("black");
      return;
    }

    if (activeClock === "white") {
      setActiveClock("black");
      return;
    }

    setActiveClock("white");
  };

  const handleBlackClockClick = () => {
    if (!activeClock) {
      setActiveClock("white");
      return;
    }

    if (activeClock === "black") {
      setActiveClock("white");
      return;
    }

    setActiveClock("black");
  };

  return (
    <div className="flex items-center flex-col h-full justify-center">
      <div className="text-gray-400 flex justify-between w-60">
        <button
          type="button"
          className="text-3xl m-1 cursor-pointer"
          onClick={handlePlay}
          data-testid="play-button"
          aria-label="Play"
          title="Play"
        >
          ▶
        </button>
        <button
          type="button"
          className="text-2xl m-1 cursor-pointer"
          onClick={handlePause}
          aria-label="Pause"
          title="Pause"
        >
          ▐▐
        </button>
        <button
          type="button"
          className="text-4xl m-1 cursor-pointer"
          onClick={handleReset}
          aria-label="Reset"
          title="Reset"
        >
          ↻
        </button>
        <button
          type="button"
          className="text-4xl m-1 cursor-pointer"
          onClick={handleExit}
          aria-label="Exit"
          title="Exit"
        >
          ✖
        </button>
      </div>
      <div
        className="w-56 h-56 bg-gray-500 rounded-2xl m-4 mb-2 cursor-pointer"
        onClick={handleWhiteClockClick}
        data-testid="white-clock"
        title="White clock"
      >
        <div className="flex h-56 justify-center items-center text-3xl font-bold text-white">
          {formatTime(whiteTime)}
        </div>
      </div>
      <div
        className="w-56 h-56 bg-gray-500 rounded-2xl m-4 mb-2 cursor-pointer"
        onClick={handleBlackClockClick}
        data-testid="black-clock"
        title="Black clock"
      >
        <div className="flex h-56 justify-center items-center text-3xl font-bold text-black">
          {formatTime(blackTime)}
        </div>
      </div>
    </div>
  );
};

export default Game;
