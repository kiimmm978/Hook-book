"use client";
import React from "react";
import Child from "./child";
import WorthContext from "./worthContext";

const Parent = ({ familyName }) => {
  const { wealth } = React.useContext(WorthContext);

  return (
    <div
      style={{
        border: "2px solid #4CAF50",
        borderRadius: "16px",
        padding: "20px",
        margin: "20px auto",
        maxWidth: "500px",
        background: "linear-gradient(135deg, #f0fff4, #d0f5e8)",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "#2e7d32", marginBottom: "10px" }}>
        👨‍👩‍👧‍👦 Parent Component
      </h2>

      <div
        style={{
          border: "1px solid #c8e6c9",
          borderRadius: "12px",
          padding: "10px",
          backgroundColor: "#ffffff",
          marginBottom: "15px",
        }}
      >
        <Child familyName={familyName} />
      </div>

      <div
        style={{
          fontSize: "18px",
          fontWeight: "600",
          color: "#1b5e20",
          backgroundColor: "#e8f5e9",
          padding: "12px",
          borderRadius: "10px",
          boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        💰 Total Wealth: {wealth}
      </div>
    </div>
  );
};

export default Parent;
