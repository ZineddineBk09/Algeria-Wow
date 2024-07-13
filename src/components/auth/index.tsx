import React from "react";
import Login from "./login";
import Register from "./register";

const AuthDialogs = () => {
  return (
    <div className="flex h-11 w-fit items-center justify-center rounded-xl border-2 border-primary-yellow bg-white px-8 py-1 text-sm font-medium text-primary text-primary-yellow hover:bg-gray-100  hover:text-primary-yellow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50">
      <Login />
      <span>/</span>
      <Register />
    </div>
  );
};

export default AuthDialogs;
