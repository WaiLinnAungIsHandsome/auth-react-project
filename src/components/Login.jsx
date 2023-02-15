import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen min-h-screen flex justify-center items-center bg-cover bg-center bg-[url('/bg.png')]">
      <div className=" flex justify-center items-center h-[800px] gap-20  rounded-lg bg-gradient-to-r from-slate-100 via-slate-100 to-transparent shadow-lg">
        <div className=" w-[500px] flex flex-col justify-center p-10">
          <h1 className=" font-bold text-3xl text-sky-700  mb-8">
            Sign in to your account
          </h1>
          <div className="relative mb-5">
            <input
              type="text"
              id="email"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded border-1 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="email"
              className="absolute text-sm text-gray-900 font-semibold dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  bg-slate-100 dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Email
            </label>
          </div>
          <div className="relative mb-8">
            <input
              type="text"
              id="password"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded border-1 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="password"
              className="absolute text-sm text-gray-900 font-semibold dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-slate-100 dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Password
            </label>
          </div>

          <button className=" w-full bg-sky-500 text-slate-50 font-semibold text-lg py-3 rounded mb-5 transition hover:bg-sky-700 focus:bg-slate-300 focus:text-gray-700">
            Sign in
          </button>

          <p className=" text-center">
            You don't have an account?{" "}
            <span
              onClick={() => navigate("/signUp")}
              className=" text-sky-500 font-bold text-lg ml-2 cursor-pointer"
            >
              Sign up
            </span>
          </p>
        </div>
        <div className=" w-[40%]">
          <div className="">
            <img src="/SignIn.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
