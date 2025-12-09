"use client";
import React from "react";
import Child from "./child";

const Page = () => {
  const fancyRef = React.useRef();

  function handleClick() {
    fancyRef.current.focus();
  }

  function handleChangeColor() {
    fancyRef.current.changeColor();
  }

  function handleChangeText() {
    fancyRef.current.changeText("Updated Text!");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          useImperativeHandle Demo
        </h1>
        <p className="text-gray-600 mb-8">
          Interact with the child input using exposed methods.
        </p>
        <p className="text-gray-600 mb-8">
          useImperativeHandle lets a child component give special functions to
          its parent through a ref.
        </p>

        <div className="mb-6">
          <Child ref={fancyRef} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button
            onClick={handleClick}
            className="px-5 py-3 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Focus
          </button>

          <button
            onClick={handleChangeColor}
            className="px-5 py-3 bg-green-500 hover:bg-green-400 text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Change Color
          </button>

          <button
            onClick={handleChangeText}
            className="px-5 py-3 bg-purple-500 hover:bg-purple-400 text-white font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Change Text
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
