import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import { Task } from "./Task";
import { TasksCollection } from "../api/TasksCollection.js";

export const App = () => {
  const { tasks, isLoading, isError } = useTracker(() => {
    const handle = Meteor.subscribe("tasks");
    const tasks = TasksCollection.find({}).fetch();
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

      <ul>
        {tasks.map((task) => (
          <Task key={task._id} task={task} />
        ))}
      </ul>
    </div>
  );
};
