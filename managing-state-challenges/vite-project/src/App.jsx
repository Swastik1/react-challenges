import { useState } from "react";
import AddItem from "./AddItem";
import "./App.css";

let nextId = 3;

const initialItem = [
  { id: 0, title: "Warm Socks", packed: true },
  { id: 0, title: "Travel Journal", packed: false },
  { id: 0, title: "Warm Socks", packed: false },
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

  return (
    <>
      <h2>Travel Plan</h2>
      <AddItem onAddItem={handleAddItem} />
    </>
  );
}

export default App;
