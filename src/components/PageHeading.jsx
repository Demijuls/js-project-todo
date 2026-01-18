import { TaskCount } from "./TaskCount";
import { AddNewTaskForm } from "./AddNewTaskForm";
import { TodaysDate } from "./TodaysDate";
import { useTaskStore } from "../stores/TaskStore";

import styled from "styled-components";

const HeadingWrapper = styled.div`
  margin: 64px 80px 64px;
  display: grid;
  grid-template-columns: 2fr auto;
  gap: 20px;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin: 24px 16px;
  }
`;

const HeadingInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const InfoWrapperRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 769px) and (max-width: 1024px) {
    align-items: baseline;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const CompleteButton = styled.button`
  height: 32px;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-dark);
  background-color: transparent;
  border: 1px solid var(--primary-grey);
  border-radius: 6px;

  &&:hover {
    background-color: #bdd2ff;
    transform: scale(1.02);
  }

  &&:active {
    background-color: #78a2fa;
    transform: scale(1.02);
  }

  &:focus {
    border: 2px solid #0049e8;
  }
`;

export const PageHeading = () => {
  const { completeAll } = useTaskStore();

  return (
    <HeadingWrapper>
      <HeadingInfo>
        <h1>Hello there! What do you want to do today?</h1>
        <InfoWrapperRow>
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <p>Today is </p>
            <TodaysDate />
          </div>
          <TaskCount />
          <CompleteButton onClick={completeAll}>Complete all</CompleteButton>
        </InfoWrapperRow>
      </HeadingInfo>
      <AddNewTaskForm />
    </HeadingWrapper>
  );
};
