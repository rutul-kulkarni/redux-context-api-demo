import { useSelector } from "react-redux";
import React, { useContext } from "react";
import { CartContext } from "../../utils/cartContext";

function Cart() {
  const reduxCartItem = useSelector((store) => store.cart.items);
  const { contextCartItem } = useContext(CartContext);

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div>Redux Cart ({reduxCartItem.length} Items)</div>
      <div>Context API Cart ({contextCartItem} Items)</div>
    </div>
  );
}

export default Cart;
