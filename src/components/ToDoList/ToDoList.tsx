import React from "react";
import { ITask } from "../../interfaces";
import ToDoItem from "../ToDoItem";
import "./style.css";

interface TodoListProps {
  todoList: ITask[];
  toggleTodo: (id: number) => void;
  filterToDos: (id: number) => void;
}

const ToDoList: React.FC<TodoListProps> = ({
  todoList,
  toggleTodo,
  filterToDos,
}) => {
  return (
    <div className="todo-list">
      {todoList.map((task, key: number) => {
        return (
          <ToDoItem
            key={task.id}
            task={task}
            toggleTodo={toggleTodo}
            filterToDos={filterToDos}
          />
        );
      })}
    </div>
  );
};
export default ToDoList;
