"use client";
import React from "react";
import Grandchild from "./grandchild";
import WorthContext from "./worthContext";

const Child = ({ familyName }) => {
  const { familyFeature, wealth, setWealth } = React.useContext(WorthContext);

  return (
    <div
      style={{
        border: "2px solid #2196F3",
        borderRadius: "16px",
        padding: "20px",
        margin: "20px auto",
        maxWidth: "450px",
        background: "linear-gradient(135deg, #e3f2fd, #bbdefb)",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "#1565c0", marginBottom: "10px" }}>
        👦 Child Component
      </h2>

      {/* Grandchild Section */}
      <div
        style={{
          border: "1px solid #90caf9",
          borderRadius: "12px",
          padding: "10px",
          backgroundColor: "#ffffff",
          marginBottom: "15px",
        }}
      >
        <Grandchild familyName={familyName} />
      </div>

      {/* Family Info */}
      <div
        style={{
          backgroundColor: "#e3f2fd",
          borderRadius: "10px",
          padding: "10px",
          marginBottom: "10px",
          boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <p style={{ fontWeight: "bold", color: "#0d47a1" }}>
          ✨ Family Feature: {familyFeature}
        </p>
        <p style={{ fontWeight: "bold", color: "#0d47a1" }}>
          💰 Family Wealth: {wealth}
        </p>
      </div>

      {/* Button */}
      <button
        style={{
          backgroundColor: "#1e88e5",
          color: "white",
          border: "none",
          padding: "10px 16px",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
          transition: "all 0.3s ease",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#1565c0")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#1e88e5")}
        onClick={() => setWealth(wealth + 1000000)}
      >
        💹 Increase Wealth by 1,000,000
      </button>
    </div>
  );
};

export default Child;
