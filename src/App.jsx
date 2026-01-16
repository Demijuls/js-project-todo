import { AnimationEmpty } from "./components/animationEmpty";
import { PageHeading } from "./components/PageHeading";
import { TaskCard } from "./components/TaskCard";

import styled from "styled-components";

import { useTaskStore } from "./stores/TaskStore";

const MainWrapper = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const TasksList = () => {
  const { taskInfo, toggleDone, deleteTask } = useTaskStore();
  return (
    <ul style={{ listStyle: "none" }}>
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
  const { taskInfo } = useTaskStore();
  const emptyState = taskInfo.length === 0;

  return (
    <>
      <MainWrapper>
        <PageHeading />
        {emptyState ? <AnimationEmpty /> : <TasksList />}
      </MainWrapper>
    </>
  );
};
