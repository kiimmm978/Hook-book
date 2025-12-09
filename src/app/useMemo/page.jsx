"use client";
import React, { useMemo, useState } from "react";

const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];

const Page = () => {
  const [count, setCount] = useState(0);

  const expensiveComputation = (arr1, arr2) => {
    console.log("⚙️ Expensive computation running...");
    let resultArr = [];
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        resultArr.push(arr1[i] + arr2[j]);
      }
    }
    return resultArr;
  };

  const memoizedResult = useMemo(
    () => expensiveComputation(array1, array2),
    [array1, array2]
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6">
      <div className="bg-gray-700 rounded-2xl shadow-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-semibold mb-4 text-cyan-400">
          useMemo Hook Example
        </h1>

        <p className="text-gray-300 mb-4">
          This demonstrates how <code>useMemo</code> prevents expensive
          recalculations.
        </p>

        <button
          onClick={() => setCount((c) => c + 1)}
          className="mb-6 px-5 py-2 bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-semibold rounded-lg transition-all duration-300"
        >
          Re-render: {count}
        </button>

        <div className="text-left bg-gray-800 rounded-xl p-4">
          <h2 className="text-lg font-medium text-cyan-300 mb-2">
            Memoized Result of Expensive Computation:
          </h2>
          <span className="text-gray-200 break-words">
            {memoizedResult.join(", ")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Page;
