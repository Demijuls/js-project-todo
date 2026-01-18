import { TaskCount } from "./TaskCount";
import { AddNewTaskForm } from "./AddNewTaskForm";
import { TodaysDate } from "./TodaysDate";

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

export const PageHeading = () => {
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
        </InfoWrapperRow>
      </HeadingInfo>
      <AddNewTaskForm />
    </HeadingWrapper>
  );
};
