"use client";
import React, { forwardRef } from "react";

const child = forwardRef((props, fancyRef) => {
  const inputRef = React.useRef(null);
  React.useImperativeHandle(fancyRef, () => {
    return {
      focus() {
        inputRef.current.focus();
        console.log("focus function called !");
      },
      changeColor() {
        inputRef.current.style.backgroundColor = "red";
      },
      changeText() {
        inputRef.current.value = "New Text Changed";
      },
    };
  });
  return (
    <input
      ref={inputRef}
      className="border p-2"
      placeholder="Auto-focus works in Next.js"
    />
  );
});

export default child;
