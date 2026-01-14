import { useState } from "react";
import styled from "styled-components";

export const AddNewTaskForm = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([
      ...tasks,
      task,
    ]); /* spread operator is used to save all added tasks */
    setTask(""); /* empties input when user hits Add button */
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
          onChange={handleInputChange}
          value={task}
          /* $error={} */
        />
        <label htmlFor="task-category">Add priority: </label>
        <select name="taskCategory" id="task-category">
          <option value="on fire">On fire</option>
          <option value="do asap">Do asap</option>
          <option value="can wait">Can wait</option>
        </select>
        <button type="submit" /* onClick={} */>+Add new task</button>
      </form>
      {/* {console.log(tasks)} */}
      {tasks.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
};
