import React, { useState } from "react";
import { ITask } from "../../interfaces";
import ToDoList from "../ToDoList";
import AddToDo from "../AddToDo";
import "./style.css";
 
const ToDoApp: React.FC = () => {
  const [newTaskText, setNewTaskText] = useState<string>("");
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNewTaskText(e.target.value);
  };

  const addTask = (): void => {
    if (newTaskText.trim() !== "") {
      const newTask: ITask = {
        id: todoList.length + 1,
        taskText: newTaskText,
        isCompleted: false,
      };
      setTodoList([...todoList, newTask]);
      setNewTaskText("");
    }
    return;
  };

  return (
    <div className="header">
      <input
        className="text-input"
        type="text"
        placeholder="Add a new task..."
        onChange={handleInputChange}
        value={newTaskText}
      />
      <button className="add-btn" onClick={addTask}>
        Add
      </button>
      <div className="todo-list-container">
        <ToDoList todoList={todoList} setTodoList={setTodoList} />
      </div>
    </div>
  );
};

export default ToDoApp;
