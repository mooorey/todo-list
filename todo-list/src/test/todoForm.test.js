import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import TodoForm from "../components/TodoForm";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

describe("todoForm", () => {
  it("it renders the input and submit button to add a task", () => {
    const mockFn = jest.fn();
    render(<TodoForm addTodo={mockFn} />);
    const inputField = screen.getByRole("textbox");
    expect(inputField).toBeInTheDocument();
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    fireEvent.change(inputField, { target: { value: "Play" } });
    expect(inputField.value).toBe("Play");
    fireEvent.click(button);
    expect(mockFn).toHaveBeenCalled();
  });
});
