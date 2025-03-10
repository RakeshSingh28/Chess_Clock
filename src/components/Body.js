import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Body = () => {
  const navigate = useNavigate();
  const [isDifferent, setIsDifferent] = useState(false);
  const [firstPlayerTime, setFirstPlayerTime] = useState(5);
  const [secondPlayerTime, setSecondPlayerTime] = useState(5);
  const [firstPlayerSecond, setFirstPlayerSecond] = useState(0);
  const [secondPlayerSecond, setSecondPlayerSecond] = useState(0);
  const changeIsDifferent = (event) => {
    setIsDifferent(event.target.checked);
  };
  const changeFirstPlayerTime = (event) => {
    setFirstPlayerTime(Number(event.target.value));
  };
  const changeSecondPlayerTime = (event) => {
    setSecondPlayerTime(Number(event.target.value));
  };
  const changeFirstPlayerSecond = (event) => {
    setFirstPlayerSecond(Number(event.target.value));
  };
  const changeSecondPlayerSecond = (event) => {
    setSecondPlayerSecond(Number(event.target.value));
  };
  const changeToNotice = () => {
    navigate("/notice");
  };
  return (
    <div className="text-center text-white">
      <div className="py-2 items-center text-lg">
        <input
          type="checkbox"
          className="mx-2 cursor-pointer"
          checked={isDifferent}
          onChange={changeIsDifferent}
        ></input>
        Time different between players
      </div>
      <div className="py-2 text-lg">Minutes per player</div>
      <input
        type="number"
        min={1}
        max={120}
        value={firstPlayerTime}
        onChange={changeFirstPlayerTime}
        className="m-2 text-black text-lg rounded-sm w-48"
      ></input>
      {isDifferent && (
        <input
          type="number"
          min={1}
          max={120}
          value={secondPlayerTime}
          onChange={changeSecondPlayerTime}
          className="my-2 text-black text-lg rounded-sm w-48"
        ></input>
      )}
      <div className="py-2 text-lg">Extra seconds</div>
      <input
        type="number"
        value={firstPlayerSecond}
        min={0}
        max={30}
        onChange={changeFirstPlayerSecond}
        className="m-2 text-black text-lg rounded-sm w-48"
      ></input>
      {isDifferent && (
        <input
          type="number"
          min={0}
          max={30}
          value={secondPlayerSecond}
          onChange={changeSecondPlayerSecond}
          className="my-2 text-black text-lg rounded-sm w-48"
        ></input>
      )}
      <p>
        <button
          className="bg-green-500 w-72 h-8 flex-wrap mt-4 text-lg rounded-md"
          onClick={changeToNotice}
        >
          Go!
        </button>
      </p>
    </div>
  );
};

export default Body;
