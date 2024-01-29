import React from "react";
import { useState } from "react";

const AddItem = ({ onAddItem }) => {
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleButton = () => {
    setTitle("");
    onAddItem(title);
  };

  return (
    <div>
      <input placeholder="Add Item" value={title} onChange={handleChange} />
      <button onClick={handleButton}>Add</button>
    </div>
  );
};

export default AddItem;
