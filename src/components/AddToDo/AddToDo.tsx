import React, { useState } from "react";
import "./style.css";

interface Props {
  addTodo: (newTaskText: string) => void;
}

const AddToDo: React.FC<Props> = ({ addTodo }) => {
  const [newTaskText, setNewTaskText] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNewTaskText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTaskText.trim() !== "") {
      addTodo(newTaskText);
      setNewTaskText("");
    }
    return;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="text-input"
        type="text"
        placeholder="Add a new task..."
        onChange={handleInputChange}
        value={newTaskText}
      />
      <button className="add-btn">Add</button>
    </form>
  );
};

export default AddToDo;
