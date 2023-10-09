import { useState } from "react";
import TodoContext from "./todoContext";

const TodoState = (props) => {
  const [todo, setTodo] = useState([]);

  return (
    <TodoContext.Provider value={{ todo, setTodo }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
