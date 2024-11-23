import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
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
    <div className="bg-gradient-to-b from-black absolute w-full z-10 flex justify-between">
      <img className="w-48 ml-36 mt-1" src={LOGO} alt="netflix-logo" />
      {user && (
        <div className="flex items-center">
          <img
            alt="photo-url"
            className="h-11 rounded-2xl mr-2"
            src={user?.photoURL}
          />
          <button
            className="mx-4 text-white bg-red-600 p-2 rounded-md"
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
