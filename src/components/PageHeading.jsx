import { TaskCount } from "./TaskCount";
import { AddNewTaskForm } from "./AddNewTaskForm";

export const PageHeading = () => {
  return (
    <>
      <h1>Hello there! What do you want to do today?</h1>
      <TaskCount />
      <AddNewTaskForm />
    </>
  );
};
