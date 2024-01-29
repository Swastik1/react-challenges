import { useState } from "react";
import AddItem from "./AddItem";
import PackedItem from "./PackedItem";
import "./App.css";

let nextId = 3;

const initialItem = [
  { id: 0, title: "Warm Socks", packed: true },
  { id: 1, title: "Travel Journal", packed: false },
  { id: 2, title: "Mixed Colors", packed: false },
];

function App() {
  const [items, setItems] = useState(initialItem);
  const [total, setTotal] = useState(3);
  const [packed, setPacked] = useState(1);

  const handleAddItem = (title) => {
    setTotal(total + 1);
    setItems([
      ...items,
      {
        id: nextId++,
        title: title,
        packed: false,
      },
    ]);
  };

  const handleChangeItem = (nextItem) => {
    if (nextItem.packed) {
      setPacked(packed + 1);
    } else {
      setPacked(packed - 1);
    }

    setItems(
      items.map((item) => {
        if (item.id === nextItem.id) {
          return nextItem;
        } else {
          return item;
        }
      })
    );
  };

  const handleDeleteItem = (itemID) => {
    setTotal(total - 1);
    setItems(items.filter((item) => item.id !== itemID));
    setPacked(packed - 1);
  };

  return (
    <>
      <h2>Travel Plan</h2>
      <AddItem onAddItem={handleAddItem} />
      <PackedItem
        items={items}
        onChangeItem={handleChangeItem}
        onDeleteItem={handleDeleteItem}
      />
      <hr />
      <b>
        {packed} out of {total}
      </b>
    </>
  );
}

export default App;
