import { useState } from "react";

export const AddNewTaskForm = ({ onAddTask }) => {
  const [task, setTask] = useState("");
  /* const [tasks, setTasks] = useState([]); */

  const [category, setCategory] = useState("On fire");

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleSelectorChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    /* setTasks([
      ...tasks,
      task,
    ]); /* spread operator is used to save all added tasks */
    onAddTask(task, category);

    setTask(""); /* empties input when user hits Add button */
    /* setCategory([...category]); */
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
          value={task}
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
        <button type="submit" /* onClick={handleClick} */>+Add new task</button>
      </form>
      {/* {console.log(category)} */}
      {/* {tasks.map((item) => (
        <p>{item}</p>
      ))} */}
    </div>
  );
};
