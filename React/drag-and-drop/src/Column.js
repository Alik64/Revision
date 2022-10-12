import Task from "./Task";

const Column = ({ column, tasks }) => {
  return (
    <div className="column_container">
      <h3 className="column_title">{column.title}</h3>
      <div className="taskList">
        {tasks.map((task) => (
          <Task key={task.id} task={task.content} />
        ))}
      </div>
    </div>
  );
};

export default Column;
