import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./Todo.module.css";
export default function TodoLocalStorage() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      const newArr = [...tasks, { text, complete: false, id: uuidv4() }];
      setTasks(newArr);
      window.localStorage.setItem("tasks", newArr);
      setText("");
    }
  };
  // const toggleValidate = (id) => {
  //     for (let i = 0; i < tasks.length; i++) {
  //         if (tasks[i].id === id) {
  //             tasks[i].complete = !tasks[i].complete
  //         }
  //     }
  //     setTasks([...tasks])
  // }
  const handleRemoveTask = (id) => {
    const filteredArr = tasks.filter((obj) => obj.id !== id);
    setTasks(filteredArr);
    window.localStorage.setItem("tasks", filteredArr);
  };
  console.log(tasks);

  useEffect(() => {
    const storagedTasks = window.localStorage.getItem("tasks")
      ? JSON.parse(window.localStorage.getItem("tasks"))
      : [];
    setTasks(storagedTasks);
  }, []);
  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={handleInputChange}
          placeholder="Put your task here"
        />
        <button className={styles.submitBtn} type="submit">
          Add
        </button>
      </form>
      <ol>
        {tasks
          .filter((objet) => objet.complete === false)
          .map(({ text, id }) => (
            <div className={styles.task} key={uuidv4()}>
              <li>{text}</li>
              <button
                className={styles.deleteBtn}
                onClick={() => handleRemoveTask(id)}
              >
                ✔️
              </button>
            </div>
          ))}
      </ol>
    </div>
  );
}
