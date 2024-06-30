import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import { Task } from "./Task";
import { TasksCollection } from "../api/TasksCollection.js";
import { TaskForm } from "./TaskForm";

const toggleChecked = ({ _id, isChecked }) => {
  Meteor.call(
    "tasks.updateChecked",
    { _id, isChecked: !isChecked },
    (error) => {
      if (error) {
        alert(`Error updating task: ${error.error}`);
      }
    }
  );
};

const deleteTask = ({ _id }) => {
  Meteor.call("tasks.remove", _id, (error) => {
    if (error) {
      alert(`Error deleting task: ${error.error}`);
    }
  });
};

export const App = () => {
  const { tasks, isLoading, isError } = useTracker(() => {
    const handle = Meteor.subscribe("tasks");
    const tasks = TasksCollection.find({}, { sort: { createdAt: -1 } }).fetch();
    const isLoading = !handle.ready();
    const isError = !tasks;

    return { tasks, isLoading, isError };
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading tasks.</div>;
  }

  console.log(tasks); // Check what tasks are fetched

  return (
    <div>
      <h1>Welcome to Meteor!</h1>
      <TaskForm />
      <ul>
        {tasks.map((task) => (
          <Task
            key={task._id}
            task={task}
            onCheckboxClick={toggleChecked}
            onDeleteClick={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
};
