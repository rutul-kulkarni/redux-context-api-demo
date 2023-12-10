import { Route, Routes } from "react-router-dom";
import ReduxContextAPI from "./views/redux-context-api/ReduxContextAPI";
import Layout from "./views";
import Home from "./views/back";
import Timer from "./views/timer";

function App() {
  return (
    <>
      <Home />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/redux-context-api" element={<ReduxContextAPI />} />
        <Route path="/timer" element={<Timer />} />
      </Routes>
    </>
  );
}

export default App;
