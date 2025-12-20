import { useState } from "react";
import "./App.css";

function DragList() {
  const [items, setItems] = useState([
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Node.js"
  ]);

  const [dragIndex, setDragIndex] = useState(null);

  const handleDragStart = (index) => {
    setDragIndex(index);
  };

  const handleDrop = (dropIndex) => {
    const updatedItems = [...items];
    const draggedItem = updatedItems[dragIndex];

    updatedItems.splice(dragIndex, 1);
    updatedItems.splice(dropIndex, 0, draggedItem);

    setItems(updatedItems);
    setDragIndex(null);
  };

  return (
    <div className="drag-container">
      <h2>Drag & Drop List</h2>

      {items.map((item, index) => (
        <div
          key={index}
          className="drag-item"
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={(e) => e.preventDefault()}
          onDrop={() => handleDrop(index)}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default DragList;
