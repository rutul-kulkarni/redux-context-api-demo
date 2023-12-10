import React, { useEffect, useState } from "react";

function Timer() {
  const [counter, setCounter] = useState(0);
  const [isPaused, setPaused] = useState(true);

  useEffect(() => {
    let timer;
    if (!isPaused) {
      timer = setInterval(() => {
        setCounter((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isPaused]);

  const toggle = () => {
    setPaused(!isPaused);
  };

  const handleReset = () => {
    setCounter(0);
    setPaused(true);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>{counter} sec</div>
      <div style={{ display: "flex", gap: "8px" }}>
        <button onClick={toggle}>{isPaused ? "Resume" : "Pause"}</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default Timer;
