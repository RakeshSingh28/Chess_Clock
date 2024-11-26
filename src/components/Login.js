import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { NETFLIX_BG, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errMssg, setErrMssg] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    if (name?.current?.value) name.current.value = null;
    email.current.value = null;
    password.current.value = null;
    setErrMssg(null);
  };
  const handleFormValidation = () => {
    setErrMssg(
      checkValidData(
        name?.current?.value,
        email.current.value,
        password.current.value
      )
    );
    if (errMssg) return;
    if (isSignInForm) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then(() => {})
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMssg(`${errorCode} - ${errorMessage}`);
        });
    } else {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrMssg(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMssg(`${errorCode} - ${errorMessage}`);
        });
    }
  };
  return (
    <div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-[450px] h-[617px] absolute mt-24 right-0 left-0 mx-auto bg-black bg-opacity-65 p-12 px-16 z-10 text-white"
      >
        <h1 className="font-bold text-3xl pb-8">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-3 w-full mb-4 bg-gray-950 rounded-md"
            style={{ border: "1px solid white" }}
          ></input>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email ID"
          className="p-3 w-full mb-4 bg-gray-950 rounded-md"
          style={{ border: "1px solid white" }}
        ></input>
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 w-full mb-4 bg-gray-950 rounded-md"
          style={{ border: "1px solid white" }}
        ></input>
        <button
          className="w-full bg-red-700 p-2 mb-1 rounded-md"
          onClick={handleFormValidation}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-red-500 mb-3 text-sm">{errMssg}</p>
        {isSignInForm && (
          <div>
            <div className="text-center font-thin mb-3">OR</div>
            <button className="w-full bg-gray-700 p-2 mb-3 rounded-md">
              Use a sign-in code
            </button>
          </div>
        )}
        <button className="w-full font-thin p-2 mb-3">Forgot password?</button>
        <div className="flex items-center mb-3">
          <input
            id="remember-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 cursor-pointer"
          />
          <label className="ms-2 text-lg font-thin text-gray-900 dark:text-gray-300">
            Remember me
          </label>
        </div>
        <label className="text-lg font-thin text-gray-900 dark:text-gray-300">
          {isSignInForm ? "New to Netflix?" : "Already registered?"}
          <b className="cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm ? " Sign up now." : " Sign in."}
          </b>
        </label>
        <p className="font-thin mt-6 text-xs">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </p>
      </form>
      <Header />
      <img
        className="brightness-50 w-screen h-screen fixed"
        src={NETFLIX_BG}
        alt="netflix-bg"
      />
    </div>
  );
};

export default Login;
