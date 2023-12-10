import React, { useContext } from "react";
import { CartContext } from "./utils/cartContext";

function ContextAction() {
  const { contextCartItem, setContextCartItem } = useContext(CartContext);

  const handleAddItem = () => {
    setContextCartItem(contextCartItem + 1);
  };
  const handleRemoveItem = () => {
    if (contextCartItem > 0) setContextCartItem(contextCartItem - 1);
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

export default ContextAction;
