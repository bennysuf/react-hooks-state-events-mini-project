import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [onCategory, setOnCategory] = useState("All")
  const [onDetails, setOnDetails] = useState("")
  const [onTasks, setOnTasks] = useState(TASKS)
  

  function onTaskFormSubmit(newItem){
    setOnTasks([...onTasks, newItem])
  }
  

  function handleChange(e){
    setOnDetails(e.target.value)
  }

  function handleDelete(obj){
    const newTaskList = onTasks.filter(e => {
      return obj !== e
     })
     setOnTasks(newTaskList)
   }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter onCategory={onCategory} setOnCategory={setOnCategory} categories={CATEGORIES}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} onDetails={onDetails} handleChange={handleChange}/>
      <TaskList onCategory={onCategory} task={onTasks} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
