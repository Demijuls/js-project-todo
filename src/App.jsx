import { AnimationEmpty } from "./components/AnimationEmpty";
import { PageHeading } from "./components/PageHeading";
import { TaskCard } from "./components/TaskCard";

import styled from "styled-components";

import { useTaskStore } from "./stores/TaskStore";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-family: "Nunito", Avenir, Helvetica, Arial, sans-serif;
`;

const TasksList = () => {
  const { taskInfo, toggleDone, deleteTask } = useTaskStore();
  return (
    <ul style={{ listStyle: "none", margin: "0px", padding: "0px" }}>
      {taskInfo.map((task) => (
        <li style={{ margin: "0px" }}>
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
  const { taskInfo } = useTaskStore();
  const emptyState = taskInfo.length === 0;

  return (
    <MainWrapper className="mainWrapper">
      <PageHeading />
      {emptyState ? <AnimationEmpty /> : <TasksList />}
    </MainWrapper>
  );
};
