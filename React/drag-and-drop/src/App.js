import React, { useState } from "react";

import initialData from "./initial-data";
import Column from "./Column";

const App = () => {
  const [state, setState] = useState(initialData);

  const columns = state.columnOrder.map((columnId) => {
    const column = state.columns[columnId];
    const tasks = column.tasksId.map((taskId) => state.tasks[taskId]);
    return <Column key={column.id} column={column} tasks={tasks} />;
  });
  console.log("heheh");
  return <div>{columns}</div>;
};

export default App;
