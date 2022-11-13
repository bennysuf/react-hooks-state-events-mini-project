import React from "react";
import Task from "./Task";
import {v4 as uuid} from "uuid";

function TaskList({ task, onCategory, handleDelete }) {
  
  if (onCategory !== "All" && task) {
    task = task.filter(t => t.category === onCategory);
  }

  return (
    <div className="tasks">
      <ul>
       {task && task.map((tasks) => <Task key={uuid()} task={tasks}  handleDelete={handleDelete} /> )}
      </ul>
    </div>
  );
}

export default TaskList;


//connect CategoryFilter to Task or TaskList and filter to post only if that class is selected 
