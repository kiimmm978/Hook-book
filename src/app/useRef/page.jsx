"use client";
import React, { useEffect, useRef } from "react";

const UseRefDemoPage = () => {
  const [state, setState] = React.useState(0);
  const clickCount = useRef(0);
  const changeColorRef = useRef(null);

  function counter() {
    clickCount.current += 1;
    console.log("ClickCount:", clickCount.current);
    console.log("Counter called", state + 1);
    setState(state + 2);
  }

  function changeColor() {
    changeColorRef.current.style.backgroundColor = "#ef4444"; // Tailwind red-500
    changeColorRef.current.style.color = "#fff";
  }

  const [isTimerOn, setIsTimerOn] = React.useState(false);
  const [displayTime, setDisplayTime] = React.useState(0);
  //   const [timer, setTimer] = React.useState(0);
  var timer = useRef(0);
  var intervalRef = useRef(null);

  useEffect(() => {
    if (isTimerOn) {
      // start timer
      intervalRef.current = setInterval(() => {
        timer.current += 1;
        setDisplayTime(timer.current);
        console.log("Timer:", timer.current);
      }, 1000);
    } else {
      // stop timer
      clearInterval(intervalRef.current);
    }

    // Cleanup on unmount
    return () => clearInterval(intervalRef.current);
  }, [isTimerOn]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-start py-12 px-6 space-y-8">
      <h1 className="text-4xl font-bold text-cyan-400 mb-4">
        useRef Hook Demo
      </h1>
      <p className="text-gray-300 text-center max-w-xl">
        <strong>useRef</strong> lets you persist values across renders without
        triggering re-renders and directly access or modify DOM elements.
      </p>

      {/* Example 1 */}
      <div className="bg-gray-800 rounded-2xl p-6 w-full max-w-md shadow-lg">
        <h2 className="text-xl font-semibold text-yellow-400 mb-2">
          Example 1: Persist Value Across Renders
        </h2>
        <p className="text-gray-400 text-sm mb-4">
          Each click increments both state and ref. The <code>useRef</code>{" "}
          value persists without causing re-renders.
        </p>
        <button
          onClick={counter}
          className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2 px-4 rounded-lg transition-all"
        >
          Increment
        </button>
        <div className="mt-3 text-lg">
          <span className="font-semibold text-cyan-300">State Count:</span>{" "}
          {state}
        </div>
        <div className="mt-3 text-lg">
          <span className="font-semibold text-cyan-300">Click Count:</span>{" "}
          {clickCount.current}
        </div>
      </div>

      {/* Example 2 */}
      <div className="bg-gray-800 rounded-2xl p-6 w-full max-w-md shadow-lg">
        <h2 className="text-xl font-semibold text-green-400 mb-2">
          Example 2: Access DOM Elements
        </h2>
        <p className="text-gray-400 text-sm mb-4">
          The ref lets us directly modify the DOM node’s styles.
        </p>
        <div className="flex space-x-4">
          <button
            ref={changeColorRef}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-all"
          >
            Button
          </button>
          <button
            onClick={changeColor}
            className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg transition-all"
          >
            Change Color
          </button>
        </div>
      </div>

      {/* Example 3 */}
      <div className="bg-gray-800 rounded-2xl p-6 w-full max-w-md shadow-lg">
        <h2 className="text-xl font-semibold text-green-400 mb-2">
          Stop Watch
        </h2>
        <p className="text-gray-400 text-sm mb-4">
          The ref lets us directly modify the DOM node’s styles.
        </p>
        <div className="flex space-x-4">{displayTime}</div>
        <div className="flex space-x-4">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-all"
            onClick={() => setIsTimerOn(true)}
            // onClick={startCounter}
          >
            Start
          </button>
          <button
            onClick={() => setIsTimerOn(false)}
            className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg transition-all"
          >
            Stop
          </button>
          <button
            className="bg-black-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition-all"
            onClick={() => {
              setIsTimerOn(false);
              setDisplayTime(0);
              timer.current = 0;
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseRefDemoPage;
