import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  return (
    <div className="bg-gradient-to-b from-black absolute w-full z-10 flex justify-between">
      <img
        className="w-48 ml-36 mt-1"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix-logo"
      />
      {user && (
        <div className="flex items-center">
          <img
            alt="photo-url"
            className="h-11 rounded-2xl mr-2"
            src={user?.photoURL}
          />
          <button
            className="mr-4 text-white"
            onClick={() => {
              signOut(auth)
                .then(() => {
                  navigate("/");
                })
                .catch((error) => {
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
