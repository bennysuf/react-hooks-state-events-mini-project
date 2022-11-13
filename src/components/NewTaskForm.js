import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit, onDetails, handleChange }) {
const [taskCategory, setTaskCategory] = useState("Code")

  const options = categories.map(cats => {
    if (cats !== "All") {
      return <option key={cats} value={cats}>{cats}</option>
    }
    return cats
 })

function updateCategory(e){
  setTaskCategory(e.target.value)
}

 function handleClick(e){
  e.preventDefault()
  // if (onDetails.length >= 1) {
    const newItem = {
      text: onDetails,
      category: taskCategory,
    }
    onTaskFormSubmit(newItem)
  // }
 }


  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" onChange={handleChange} value={onDetails}/>
      </label>
      <label>
        Category
        <select name="category" onChange={updateCategory}>
          {options}
        </select>
      </label>
      <input type="submit" value="Add task" onSubmit={handleClick}/>
    </form>
  );
}

export default NewTaskForm;
