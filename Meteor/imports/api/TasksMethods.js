// /imports/api/TasksMethods.js
import { Meteor } from "meteor/meteor";
import { TasksCollection } from "/imports/api/TasksCollection";

Meteor.methods({
  "tasks.insert"(text) {
    // Remove the user authentication check
    TasksCollection.insert({
      text,
      createdAt: new Date(),
    });
  },
  "tasks.updateChecked"({ _id, isChecked }) {
    TasksCollection.update(_id, {
      $set: {
        isChecked,
      },
    });
  },
  "tasks.remove"(_id) {
    TasksCollection.remove(_id);
  },
});
