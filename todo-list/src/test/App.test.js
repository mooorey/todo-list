import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import App from "../App.js";
import '@testing-library/jest-dom/extend-expect';


jest.mock("../styles/styles.css", () => ({}));

afterEach(cleanup);

describe("App should be renders", () => {
  it("should contain todo list heading", () => {
    render(<App />);
    expect(screen.getByText("Todo List")).toBeInTheDocument();
  });
});
