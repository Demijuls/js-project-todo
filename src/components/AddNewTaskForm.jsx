import { useState } from "react";
import { useTaskStore } from "../stores/TaskStore";

export const AddNewTaskForm = () => {
  const { addTask } = useTaskStore();

  const [name, setName] = useState("");

  const [category, setCategory] = useState("On fire");

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSelectorChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addTask({ name, category });

    setName(""); /* empties input when user hits Add button */
  };

  return (
    <div className="addTaskWrapper">
      <form onSubmit={handleSubmit}>
        <label htmlFor="taskInput">Add new task: </label>
        <input
          as="textarea"
          id="taskInput"
          name="task-input"
          alt="enter your task here"
          placeholder="ex.: Buy milk for pancakes"
          value={name}
          onChange={handleInputChange}
          /* $error={} */
        />
        <label htmlFor="task-category">Add priority: </label>
        <select
          name="taskCategory"
          id="task-category"
          onChange={handleSelectorChange}
          value={category}
        >
          <option value="on fire">On fire</option>
          <option value="do asap">Do asap</option>
          <option value="can wait">Can wait</option>
        </select>
        <button type="submit">+Add new task</button>
      </form>
    </div>
  );
};
