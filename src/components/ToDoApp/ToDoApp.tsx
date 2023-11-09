import React, { useState } from "react";
import { ITask } from "../../interfaces";
import ToDoList from "../ToDoList";
import AddToDo from "../AddToDo";
import "./style.css";

const ToDoApp: React.FC = () => {
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleAddTodo = (newTaskText: string) => {
    const newTask: ITask = {
      id: todoList.length + 1,
      taskText: newTaskText,
      isCompleted: false,
    };
    setTodoList([...todoList, newTask]);
  };

  return (
    <div className="todo-list-container">
      <AddToDo addTodo={handleAddTodo} />
      <ToDoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
};

export default ToDoApp;
