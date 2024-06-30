import React, { useState } from "react";
import { TasksCollection } from "/imports/api/TasksCollection";

export const TaskForm = () => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) return;

    Meteor.call("tasks.insert", text.trim(), (error) => {
      if (error) {
        alert(error.error); // Show an alert if there is an error
      } else {
        setText(""); // Clear the input field on successful insertion
      }
    });
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type to add new tasks"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button type="submit">Add Task</button>
    </form>
  );
};
