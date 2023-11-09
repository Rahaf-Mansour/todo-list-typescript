import React from "react";
import { ITask } from "../../interfaces";
import "./style.css";

interface ToDoItemProps {
  task: ITask;
  toggleTodo: (id: number) => void;
  filterToDos: (id: number) => void;
}

const ToDoItem: React.FC<ToDoItemProps> = ({
  task,
  toggleTodo,
  filterToDos,
}) => {
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
      <button className="delete-task-btn" onClick={() => filterToDos(task.id)}>
        X
      </button>
    </div>
  );
};

export default ToDoItem;
