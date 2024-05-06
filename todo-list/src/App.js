import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useState } from "react";
import { v4 } from "uuid";
import myContext from "./components/context";

import themeContext from "./components/themeContext";
import React from "react";

function App() {
  const [theme, setTheme] = useState("light");
  const heading = "Todo List";
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: v4(),
      title: text,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
    console.log(todos);
  };

  const checkTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) todo.isCompleted = !todo.isCompleted;
        console.log(todo.isCompleted);
        return todo;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <themeContext.Provider value={theme}>
      <myContext.Provider value={heading}>
    <div>
      <center>
        <h1>Todo List</h1>
      </center>
      <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            checkTodo={checkTodo}
            deleteTodo={deleteTodo}
          />
          <br></br>
    </div>
      </myContext.Provider>
    </themeContext.Provider>
  );
}

export default App;
