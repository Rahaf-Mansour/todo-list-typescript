import React from "react";
import { ITask } from "../../interfaces";
import "./style.css";

interface ToDoItemProps {
  task: ITask;
  todoList: ITask[];
  setTodoList: React.Dispatch<React.SetStateAction<ITask[]>>;
}

const ToDoItem: React.FC<ToDoItemProps> = ({ task, todoList, setTodoList }) => {
  const toggleTodo = (id: number) => {
    const updatedTasks = todoList.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTodoList(updatedTasks);
  };

  const deleteTask = (id: number): void => {
    alert("task deleted");
    const updatedTasks = todoList.filter((task) => task.id !== id);
    setTodoList(updatedTasks);
  };

  return (
    <div className="task-item">
      <input
        className="checkbox-btn"
        type="checkbox"
        onChange={() => toggleTodo(task.id)}
        checked={task.isCompleted}
      />
      <span className={`${task.isCompleted && "completed"}`}>
        {task.taskText}
      </span>
      <button className="delete-task-btn" onClick={() => deleteTask(task.id)}>
        X
      </button>
    </div>
  );
};

export default ToDoItem;
