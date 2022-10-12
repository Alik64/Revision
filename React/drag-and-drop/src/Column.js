import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";
const Column = ({ column, tasks }) => {
  return (
    <div className="column_container">
      <h3 className="column_title">{column.title}</h3>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <div
            className="taskList"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
