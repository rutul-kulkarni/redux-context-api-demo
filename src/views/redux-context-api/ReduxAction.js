import React from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../utils/cartSlice";

function ReduxAction() {
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem());
  };
  const handleRemoveItem = () => {
    dispatch(removeItem());
  };

  return (
    <div style={{ margin: "20px" }}>
      <div style={{ display: "flex", gap: "8px" }}>
        <button onClick={handleAddItem}>Add +</button>
        <button onClick={handleRemoveItem}>Remove -</button>
      </div>
    </div>
  );
}

export default ReduxAction;
