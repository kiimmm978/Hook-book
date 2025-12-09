"use client";
import React, { useCallback, useState } from "react";
import Baby from "./baby";
import HookIndicator from "../components/hookIndicator";

const Page = () => {
  const [state, setState] = useState(0);

  const feedbaby = useCallback(() => {
    console.log("👶 Baby feeded!");
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-pink-100 to-blue-100 text-gray-800">
      <HookIndicator />
      <div className="bg-white shadow-lg rounded-2xl p-8 w-96 text-center border border-gray-200">
        <h1 className="text-2xl font-semibold mb-4 text-pink-600">
          🍼 useCallback Hook Example
        </h1>

        <p className="mb-6 text-gray-600">
          Demonstrating how{" "}
          <span className="font-semibold text-blue-600">useCallback</span>
          prevents unnecessary child re-renders.
        </p>

        <button
          onClick={() => setState((prev) => prev + 1)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-xl mb-4 shadow transition-all"
        >
          Do Yout Other Tasks: <span className="font-bold">{state}</span>
        </button>

        <div className="border-t border-gray-300 my-4"></div>

        <Baby feedbaby={feedbaby} />
      </div>
    </div>
  );
};

export default Page;
