import { TaskCount } from "./TaskCount";
import { AddNewTaskForm } from "./AddNewTaskForm";
import { TodaysDate } from "./TodaysDate";

export const PageHeading = ({ onAddTask }) => {
  return (
    <>
      <h1>Hello there! What do you want to do today?</h1>
      <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
        <p>Today is </p>
        <TodaysDate />
      </div>
      <TaskCount />
      <AddNewTaskForm onAddTask={onAddTask} />
    </>
  );
};
