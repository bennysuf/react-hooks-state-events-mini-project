import React from "react";

function Task({ text, category, handleDelete }) {
// const  {text, category} = task 
// console.log(task) 

  function handleClick(){
    handleDelete(task)
  }

  return (
    <div className="task">
      <div className="label">{text}</div>
      <div className="text">{category}</div>
      <button className="delete" onClick={handleClick}>X</button>
    </div>
  )
}

export default Task;
