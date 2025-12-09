import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import HookIndicator from "./hookIndicator.js";

test("this is the test script1", () => {
  render(<HookIndicator />);
  const linkEle = screen.getByText("Current");
  expect(linkEle).toBeInTheDocument();
});
