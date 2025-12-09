"use client";
import React from "react";
import WorthContext from "./worthContext";

const Grandchild = ({ familyName }) => {
  const { wealth } = React.useContext(WorthContext);

  return (
    <div
      style={{
        border: "2px solid #f57c00",
        borderRadius: "14px",
        padding: "16px",
        margin: "10px auto",
        maxWidth: "400px",
        background: "linear-gradient(135deg, #fff3e0, #ffe0b2)",
        boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <h3 style={{ color: "#e65100", marginBottom: "10px" }}>
        👶 Grandchild Component
      </h3>

      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "10px",
          padding: "10px",
          marginBottom: "8px",
          boxShadow: "inset 0 2px 4px rgba(0,0,0,0.05)",
        }}
      >
        <p style={{ fontWeight: "600", color: "#bf360c" }}>
          🏠 Family Name: {familyName}
        </p>
      </div>

      <div
        style={{
          backgroundColor: "#fff8e1",
          borderRadius: "10px",
          padding: "10px",
          fontWeight: "600",
          color: "#e65100",
          boxShadow: "inset 0 2px 4px rgba(0,0,0,0.05)",
        }}
      >
        💰 Family Worth: {wealth}
      </div>
    </div>
  );
};

export default Grandchild;
