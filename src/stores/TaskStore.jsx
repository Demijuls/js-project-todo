import { create } from "zustand";

export const taskStore = create((set) => ({
  taskInfo: {
    id: 1,
    isDone: false,
    name: "milk",
    category: "asap",
    timestamp: new Date(),

    toggleDone: () => set((state) => ({ isDone: !state.isDone })),
    setName: (newTaskName) => set({ name: newTaskName }),
  },
}));
