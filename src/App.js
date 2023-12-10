import { useState } from "react";
import "./App.css";
import Cart from "./Cart";
import ContextAction from "./ContextAction";
import ReduxAction from "./ReduxAction";
import { CartContext } from "./utils/cartContext";

function App() {
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

export default App;
