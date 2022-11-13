import React from "react";
import Task from "./Task";
import { v4 as uuid } from "uuid";

function TaskList({ tasks, onCategory, handleDelete }) {
  if (onCategory && onCategory !== "All") {
    tasks = tasks.filter((t) => t.category === onCategory);
  }

  return (
    <div className="tasks">
      <ul>
        {tasks.map((task) => (
          <Task key={uuid()} {...task} handleDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;

//connect CategoryFilter to Task or TaskList and filter to post only if that class is selected
