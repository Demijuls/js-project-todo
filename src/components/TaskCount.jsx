import { useTaskStore } from "../stores/TaskStore";
import styled from "styled-components";

const CountWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: baseline;
  align-content: center;
  justify-content: flex-end;
  font-size: 20px;
  width: auto;
`;

export const TaskCount = () => {
  const { taskInfo } = useTaskStore();
  const tasksDone = taskInfo.filter((task) => task.isDone).length;

  return (
    <CountWrapper>
      <h2
        className="taskCounterHeading"
        style={{
          fontSize: "20px",
          fontWeight: "normal",
        }}
      >
        Tasks done:
      </h2>
      <p>
        <span
          style={{
            fontWeight: "700",
            fontSize: "22px",
            color: "var(--primary-grey)",
          }}
        >
          {" "}
          {tasksDone}
        </span>
        /{taskInfo.length}
      </p>
    </CountWrapper>
  );
};
