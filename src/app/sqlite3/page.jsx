"use client";
import React, { useEffect, useState } from "react";

const page = () => {
  const [hooks, setHooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [throwMsg, setThrowMsg] = useState("test error");

  useEffect(() => {
    const fetchHooks = async () => {
      try {
        const response = await fetch("/api/hooks");
        if (!response.ok) throw new Error(`Fetch failed: ${response.status}`);
        const data = await response.json();
        setHooks(data || []);
      } catch (error) {
        console.error("Failed to load hooks:", error);
        setError(error?.message || String(error));
      } finally {
        setLoading(false);
      }
    };

    fetchHooks();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <span>sqlite3 example</span>
      <div style={{ marginTop: 10 }}>
        <input
          aria-label="error-message"
          value={throwMsg}
          onChange={(e) => setThrowMsg(e.target.value)}
          style={{ marginRight: 8 }}
        />
        <button
          onClick={() => {
            // Throw a synchronous error with the provided message.
            // This will surface as an exception in the app (useful for testing Error Boundaries)
            throw new Error(throwMsg || "manual test error");
          }}
        >
          Throw Error
        </button>
      </div>
      {error && (
        <div style={{ color: "crimson", marginTop: 8 }}>
          Error loading hooks: {error}
        </div>
      )}
      {hooks?.map((ele) => (
        <h1 key={ele.id}>{ele.name}</h1>
      ))}
    </div>
  );
};

export default page;
