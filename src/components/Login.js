import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <form className="w-[450px] h-[650px] absolute mt-32 right-0 left-0 mx-auto bg-black bg-opacity-80 p-12 px-16 z-10 text-white">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 w-full mb-4 bg-gray-950 rounded-md"
            style={{ border: "1px solid white" }}
          ></input>
        )}
        <input
          type="text"
          placeholder="Email or mobile number"
          className="p-3 w-full mb-4 bg-gray-950 rounded-md"
          style={{ border: "1px solid white" }}
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="p-3 w-full mb-4 bg-gray-950 rounded-md"
          style={{ border: "1px solid white" }}
        ></input>
        <button className="w-full bg-red-700 p-2 mb-3 rounded-md">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
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
            className="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-white dark:focus:ring-white dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer"
          />
          <label
            for="default-checkbox"
            className="ms-2 text-lg font-thin text-gray-900 dark:text-gray-300"
          >
            Remember me
          </label>
        </div>
        <label className="text-lg font-thin text-gray-900 dark:text-gray-300">
          {isSignInForm ? "New to Netflix?" : "Already registered?"}
          <b className="cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm ? " Sign up now." : " Sign in."}
          </b>
        </label>
        <p className="font-thin mt-6">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </p>
      </form>
      <Header />
      <img
        className="brightness-50"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/03ad76d1-e184-4d99-ae7d-708672fa1ac2/web/IN-en-20241111-TRIFECTA-perspective_149877ab-fcbd-4e4f-a885-8d6174a1ee81_large.jpg"
        alt="netflix-bg"
      />
    </div>
  );
};

export default Login;
