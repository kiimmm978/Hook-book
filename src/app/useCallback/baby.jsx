import React from "react";

const Baby = ({ feedbaby }) => {
  console.log("👶 Child rendered");

  return (
    <div className="flex flex-col items-center justify-center mt-6">
      <h2 className="text-xl font-semibold text-pink-600 mb-3">
        👶 Baby Component
      </h2>

      <div className="bg-pink-100 border border-pink-300 rounded-2xl p-6 w-64 text-center shadow-sm">
        <p className="text-gray-700 mb-4">
          The baby is waiting to be <span className="font-semibold">fed</span> 🍽️
        </p>

        <button
          onClick={feedbaby}
          className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-6 rounded-xl shadow transition-all duration-200 active:scale-95"
        >
          🍼 Feed Baby
        </button>
      </div>
    </div>
  );
};

export default React.memo(Baby);
