import React from "react";
import { ITask } from "../../interfaces";
import ToDoItem from "../ToDoItem";
import "./style.css";

interface TodoListProps {
  todoList: ITask[];
  setTodoList: React.Dispatch<React.SetStateAction<ITask[]>>;
}

const ToDoList: React.FC<TodoListProps> = ({ todoList, setTodoList }) => {
  return (
    <div className="todo-list">
      {todoList.map((task, key: number) => {
        return (
          <ToDoItem
            key={task.id}
            task={task}
            todoList={todoList}
            setTodoList={setTodoList}
          />
        );
      })}
    </div>
  );
};
export default ToDoList;
