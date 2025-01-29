import React, { FC } from "react";
import Todo from "../../models/todo";
import TodoItem from "../TodoItem";

type TodoProps = {
  items: Todo[];
};

const Todos: React.FC<TodoProps> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
