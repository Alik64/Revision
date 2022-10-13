import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import initialData from "./initial-data";
import Column from "./Column";

const App = () => {
  const [state, setState] = useState(initialData);

  const columns = state.columnOrder.map((columnId) => {
    const column = state.columns[columnId];
    const tasks = column.tasksIds.map((taskId) => state.tasks[taskId]);
    return <Column key={column.id} column={column} tasks={tasks} />;
  });
  const onDragEndHandler = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }
    if (
      destination.draggableId === source.draggableId &&
      destination.index === source.index
    ) {
      return;
    }
    const column = state.columns[source.droppableId];
    const tasksIdsCopy = [...column.tasksIds];
    tasksIdsCopy.splice(source.index, 1);
    tasksIdsCopy.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      tasksIds: tasksIdsCopy,
    };

    setState((prevState) => ({
      ...prevState,
      columns: {
        ...prevState.columns,
        [newColumn.id]: newColumn,
      },
    }));
  };
  return (
    <DragDropContext onDragEnd={onDragEndHandler}>
      <div>{columns}</div>
    </DragDropContext>
  );
};

export default App;
