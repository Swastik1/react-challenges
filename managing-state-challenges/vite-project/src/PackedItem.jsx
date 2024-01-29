import React from "react";

const PackedItem = ({ items, onChangeItem, onDeleteItem }) => {
  let itemContent = items.map((item) => (
    <li key={item.id}>
      <label>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={(e) => {
            onChangeItem({
              ...item,
              packed: e.target.checked,
            });
          }}
        />{" "}
        {item.title}
      </label>
      <button onClick={() => onDeleteItem(item.id)}>Delete</button>
    </li>
  ));

  return <ul>{itemContent}</ul>;
};

export default PackedItem;
