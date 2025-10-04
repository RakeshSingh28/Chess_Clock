import { useNavigate, useLocation } from "react-router-dom";

const Notice = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const changeToGame = () => {
    navigate("/game", {
      state: { ...location.state },
    });
  };
  const changeToHome = () => {
    navigate("/");
  };
  return (
    <div className="text-white text-center">
      <div className="font-serif text-5xl p-4">Before Starting...</div>
      <p className="text-lg my-2">
        Player having blacks has to click to its opponent clock to start the
        game.
      </p>
      <p className="text-lg mt-2 mb-4">
        You have to touch your own clock to switch clock to your opponent.
      </p>
      <p>
        <button
          className="w-72 bg-gray-400 p-1 rounded-md"
          onClick={changeToHome}
        >
          Cancel
        </button>
      </p>
      <p>
        <button
          className="w-72 bg-green-500 p-1 m-4 rounded-md"
          onClick={changeToGame}
        >
          Understood!
        </button>
      </p>
    </div>
  );
};

export default Notice;
