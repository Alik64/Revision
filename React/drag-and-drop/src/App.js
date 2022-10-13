import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import initialData from "./initial-data";
import Column from "./Column";

const App = () => {
  const columns = initialData.columnOrder.map((columnId) => {
    const column = initialData.columns[columnId];
    const tasks = column.tasksId.map((taskId) => initialData.tasks[taskId]);
    return <Column key={column.id} column={column} tasks={tasks} />;
  });
  const onDragEndHandler = (result) => {
    // TODO :: Reorder our columns
  };
  return (
    <DragDropContext onDragEnd={onDragEndHandler}>
      <div>{columns}</div>
    </DragDropContext>
  );
};

export default App;
