import { AnimationEmpty } from "./components/animationEmpty";
import { PageHeading } from "./components/PageHeading";
import { TaskCard } from "./components/TaskCard";

import { useTaskStore } from "./stores/TaskStore";

const TasksList = () => {
  const { taskInfo, toggleDone, deleteTask } = useTaskStore();
  return (
    <ul>
      {taskInfo.map((task) => (
        <li>
          <TaskCard
            {...task}
            toggleFunction={() => {
              toggleDone(task.id);
            }}
            onDelete={() => {
              deleteTask(task.id);
            }}
          />
        </li>
      ))}
    </ul>
  );
};

export const App = () => {
  return (
    <>
      {/* <MainWrapper> */}
      <AnimationEmpty />
      <PageHeading />
      <TasksList />
      {/* <p>{taskInfo}</p> */}
      {/* <pre>{JSON.stringify(taskInfo, 0, 2)}</pre> */}
      {/* {listOfTasks} */}
      {/*<FilterTasksList /> */}
      {/*  </MainWrapper> */}
    </>
  );
};
