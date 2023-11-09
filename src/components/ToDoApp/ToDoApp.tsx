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

  const handleToggleTodo = (id: number) => {
    const updatedTasks = todoList.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTodoList(updatedTasks);
  };

  const AlertDeletedTaskAndFilter = (id: number): void => {
    alert("task was deleted");
    const updatedTasks = todoList.filter((task) => task.id !== id);
    setTodoList(updatedTasks);
  };

  return (
    <div className="todo-list-container">
      <AddToDo addTodo={handleAddTodo} />
      <ToDoList
        todoList={todoList}
        toggleTodo={handleToggleTodo}
        filterToDos={AlertDeletedTaskAndFilter}
      />
    </div>
  );
};

export default ToDoApp;
