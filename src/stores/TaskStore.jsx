import { create } from "zustand";

let lastId = 0;

export const useTaskStore = create((set) => ({
  taskInfo: [],

  addTask: ({ name, category }) =>
    set((state) => {
      const newState = {
        taskInfo: [
          ...state.taskInfo,
          {
            id: lastId,
            isDone: false,
            name,
            category,
            timestamp: new Date(), // Time stamp - added from today's date when user creates task
          },
        ],
      };

      // Inside this function it's updating the variable to remember the last ID
      lastId++;

      return newState;
    }),

  toggleDone: (id) =>
    set((state) => ({
      taskInfo: state.taskInfo.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      ),
    })),

  deleteTask: (id) =>
    set((state) => ({
      taskInfo: state.taskInfo.filter((task) => task.id !== id),
    })),

  completeAll: () =>
    set((state) => {
      const completeAllTasks = state.taskInfo.every((task) => task.isDone);
      const uncompletedAll = state.taskInfo.map((task) => ({
        ...task,
        isDone: !completeAllTasks,
      }));
      return { taskInfo: uncompletedAll };
    }),
}));
