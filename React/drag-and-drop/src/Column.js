const Column = ({ column, tasks }) => {
  return (
    <div>
      <h1>{column.title}</h1>
      {tasks.map((task) => (
        <div key={task.id}>{task.content}</div>
      ))}
    </div>
  );
};

export default Column;
