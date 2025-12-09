"use client";
import React, { createContext, useState } from "react";
import Parent from "./components/parent";
import WorthContext from "./components/worthContext";

const page = () => {
  const familyContext = createContext("");
  const [wealth, setWealth] = useState(1000);
  return (
    <div>
      <WorthContext.Provider
        value={{ familyFeature: "tall", wealth: wealth, setWealth: setWealth }}
      >
        <h1>useContext Page</h1>
        <Parent familyName="Smith" />
      </WorthContext.Provider>
    </div>
  );
};

export default page;
