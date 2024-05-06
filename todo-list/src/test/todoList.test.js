import React from "react";
import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

describe("todoList", () => {
  it("it renders all the tasks", () => {
    const mockTasks = [{ id: 1, title: "play football", isCompleted: false }];

    const mockFn = jest.fn();

    const { getByText } = render(
      <TodoList todos={mockTasks} deleteTodo={mockFn} />
    );

    expect(getByText("play football")).toBeInTheDocument();
    const deleteButton = screen.getByRole("button", { name: /delete/i });
    fireEvent.click(deleteButton);
    expect(mockFn).toHaveBeenCalled();
  });
});
