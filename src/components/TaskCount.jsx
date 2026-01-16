import { useTaskStore } from "../stores/TaskStore";

export const TaskCount = () => {
  const { taskInfo } = useTaskStore();
  const tasksDone = taskInfo.filter((task) => task.isDone).length;

  return (
    <>
      <h2>Tasks done:</h2>
      <p>
        {tasksDone}/{taskInfo.length}
      </p>
    </>
  );
};
