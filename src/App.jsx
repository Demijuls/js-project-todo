import { useState } from "react";
import { AnimationEmpty } from "./components/animationEmpty";
import { PageHeading } from "./components/PageHeading";
import { TaskCard } from "./components/TaskCard";
import { AddNewTaskForm } from "./components/AddNewTaskForm";

const tasksList = [
  {
    id: 1,
    isDone: false,
    name: "Buy milk",
    category: "asap",
    timestamp: new Date(),
  },
  {
    id: 2,
    isDone: false,
    name: "Buy cookies",
    category: "asap",
    timestamp: new Date(),
  },
  {
    id: 3,
    isDone: false,
    name: "Make cocoa at home",
    category: "On fire",
    timestamp: new Date(),
  },
  {
    id: 4,
    isDone: false,
    name: "Watch a movie",
    category: "asap",
    timestamp: new Date(),
  },
];

export const App = () => {
  const [tasksState, setTasksState] = useState(tasksList);

  /*   const handleSubmit = () => {
    setTasksState((currentState) => [
      ...currentState,
      {
        isDone: false,
        name: "Watch a movie",
        category: "asap",
        timestamp: new Date(),
      },
    ]);
  }; */

  const addTask = (name, category) => {
    setTasksState((prevState) => [
      ...prevState,
      {
        id: "",
        isDone: false,
        name,
        category,
        timestamp: new Date(),
      },
    ]);
  };

  const handleToggle = (id) => {
    setTasksState((prevState) =>
      prevState.map((task) => {
        if (task.id === id) {
          return { ...task, isDone: !task.isDone };
        } else {
          return task;
        }
      })
    );
  };

  const deleteTask = (id) => {
    setTasksState((prevState) => prevState.filter((task) => task.id !== id)); //creates a new array without a task, choosing task by id, to replace an old array
  };

  const listOfTasks = tasksState.map((task) => (
    <TaskCard
      key={task.id}
      {...task}
      onToggle={handleToggle}
      onDelete={deleteTask}
    />
  ));

  return (
    <>
      {/* <MainWrapper> */}
      <AnimationEmpty />
      <PageHeading onAddTask={addTask} />
      {/*   <TaskCard
        onToggle={handleToggle}
        onDelete={deleteTask}
        name="name"
        category="asap"
        timestamp={new Date()}
      /> */}
      {listOfTasks}
      {/* <button onClick={handleSubmit}>Change</button> */}
      {/*<FilterTasksList /> */}
      {/*  </MainWrapper> */}
    </>
  );
};
