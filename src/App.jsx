import { useState } from "react";
import { AnimationEmpty } from "./components/animationEmpty";
import { PageHeading } from "./components/PageHeading";
import { TaskCard } from "./components/TaskCard";

const tasksList = [
  {
    isDone: true,
    name: "Buy milk",
    category: "asap",
    timestamp: new Date(),
  },
  {
    isDone: false,
    name: "Buy cookies",
    category: "asap",
    timestamp: new Date(),
  },
  {
    isDone: false,
    name: "Make cocoa at home",
    category: "On fire",
    timestamp: new Date(),
  },
  {
    isDone: true,
    name: "Watch a movie",
    category: "asap",
    timestamp: new Date(),
  },
];

export const App = () => {
  const [tasksState, setTasksState] = useState(tasksList);

  const listOfTasks = tasksState.map((task) => <TaskCard {...task} />);

  const handleSubmit = () => {
    setTasksState((currentState) => [
      ...currentState,
      {
        isDone: true,
        name: "Watch a movie",
        category: "asap",
        timestamp: new Date(),
      },
    ]);
  };

  return (
    <>
      {/* <MainWrapper> */}
      <AnimationEmpty />
      <PageHeading />
      <TaskCard name="name" category="asap" timestamp={new Date()} />
      {listOfTasks}
      <button onClick={handleSubmit}>Change</button>
      {/*<FilterTasksList /> */}
      {/*  </MainWrapper> */}
    </>
  );
};
