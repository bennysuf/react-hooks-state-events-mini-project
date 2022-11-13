import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [taskCategory, setTaskCategory] = useState("Code");
  const [onDetails, setOnDetails] = useState("");

  const options = categories.map((cats) => {
    if (cats !== "All") {
      return (
        <option key={cats} value={cats}>
          {cats}
        </option>
      );
    }
    return cats;
  });

  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit({
      text: onDetails,
      category: taskCategory,
    });
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          onChange={(e) => setOnDetails(e.target.value)}
          value={onDetails}
          required
        />
      </label>
      <label>
        Category
        <select
          name="category"
          onChange={(e) => setTaskCategory(e.target.value)}
        >
          {options}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
