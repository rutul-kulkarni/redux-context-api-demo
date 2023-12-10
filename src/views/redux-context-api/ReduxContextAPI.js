import "../../App.css";
import React, { useState } from "react";
import { CartContext } from "../../utils/cartContext";
import ReduxAction from "./ReduxAction";
import ContextAction from "./ContextAction";
import Cart from "./Cart";

function ReduxContextAPI() {
  const [contextCartItem, setContextCartItem] = useState(0);
  return (
    <CartContext.Provider value={{ contextCartItem, setContextCartItem }}>
      <div className="App">
        <Cart />
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div>
            <ReduxAction />
          </div>
          <div>
            <ContextAction />
          </div>
        </div>
      </div>
    </CartContext.Provider>
  );
}

export default ReduxContextAPI;
