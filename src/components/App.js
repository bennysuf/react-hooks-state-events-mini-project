import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [onCategory, setOnCategory] = useState("All");
  const [onTasks, setOnTasks] = useState(TASKS);

  function onTaskFormSubmit(newItem) {
    setOnTasks([...onTasks, newItem]);
  }

  function handleDelete({ text, category }) {
    setOnTasks(
      onTasks.filter((task) => task.text !== text || task.category !== category)
    );
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        onCategory={onCategory}
        setOnCategory={setOnCategory}
        categories={CATEGORIES}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList
        onCategory={onCategory}
        tasks={onTasks}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
