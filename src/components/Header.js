import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { addSearchedMovies, toggleGptSearchView } from "../utils/gptSlice";
import { LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const showGPT = useSelector((store) => store.gpt);
  const language = useSelector((store) => store.config.lang);
  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
    showGPT.showGptSearch &&
      dispatch(addSearchedMovies({ searchedText: "", movies: [] }));
  };
  const changeGptLanguage = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Unsubscribe when component unmounts
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div className="bg-gradient-to-b from-black absolute w-full z-10 flex flex-col md:flex-row md:justify-between justify-center">
      <img
        className="w-48 mt-1 mx-auto md:ml-36"
        src={LOGO}
        alt="netflix-logo"
      />
      {user && (
        <div className="flex items-center mx-auto md:mx-0">
          {showGPT.showGptSearch && (
            <select
              className="p-2 ml-4 bg-black text-white border-green-100 cursor-pointer"
              onChange={changeGptLanguage}
              value={language}
            >
              {LANGUAGES.map((lang) => (
                <option key={lang.id} value={lang.id}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleGptSearchClick}
            className="text-white bg-purple-800 p-2 rounded-md mx-4 hover:bg-opacity-80"
          >
            {showGPT.showGptSearch ? "Home" : "GPT Search"}
          </button>
          <img
            alt="photo-url"
            className="h-11 rounded-2xl"
            src={user?.photoURL}
          />
          <button
            className="mx-4 text-white bg-red-600 p-2 rounded-md hover:bg-opacity-80"
            onClick={() => {
              signOut(auth)
                .then(() => {})
                .catch(() => {
                  navigate("/error");
                });
            }}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
