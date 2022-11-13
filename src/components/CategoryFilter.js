import React, { useState } from "react";

function CategoryFilter({ onCategory, setOnCategory, categories }) {
  const [className, setClassName] = useState([])

 
  function handleClick(e){
    setClassName([e.target.value])
    setOnCategory(e.target.value)
  } 


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(cat => <button key={cat} className={cat===className[0]?'selected':""} onClick={handleClick} value={cat}>{cat}</button>)}
    </div>
  );
}

export default CategoryFilter;
