import { React, useContext, useState, createContext } from "react";
import { FormControl, Container, TextField, Button } from "@mui/material";
import myContext from "./context";
import themeContext from "./themeContext";

const TodoForm = ({ addTodo }) => {
  const heading = useContext(myContext);
  const theme = useContext(themeContext);
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };
  return (
    <Container maxWidth="sm" className={theme}>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth={true}>
          <TextField
            label="Enter task"
            required={true}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <br></br>
          <Button variant="contained" color="primary" type="submit">
            Add Task
          </Button>
        </FormControl>
      </form>
    </Container>
  );
};

export default TodoForm;
