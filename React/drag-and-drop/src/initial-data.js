const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "Create React app" },
    "task-2": { id: "task-2", content: "Do drag and drop" },
    "task-3": { id: "task-3", content: "Find a freelance mission" },
    "task-4": { id: "task-4", content: "Earn a lot of money" },
    "task-5": { id: "task-5", content: "Invest and enjoy my life!" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To do",
      tasksIds: ["task-1", "task-2", "task-3", "task-4", "task-5"],
    },
    "column-2": {
      id: "column-2",
      title: "Doing",
      tasksIds: [],
    },
  },
  columnOrder: ["column-1", "column-2"],
};

export default initialData;
