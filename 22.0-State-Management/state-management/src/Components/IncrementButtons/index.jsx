import React, { useState } from "react";

function IncrementButtons() {
  const [count, setCount] = useState(0);
  const [lastPressed, setLastPressed] = useState(null);
  const handleClick = (label) => {
    setLastPressed(label);
    if (label === "One") {
        setCount((count) => count + 1);
    } else if (label === "Two") {
      setCount((count) => count + 1);
      setCount((count) => count + 1);
    }
  };
  return (
    <div style={{"paddingTop":"2rem"}}>
      <h3>Last Pressed: {lastPressed}</h3>
      <h4>Count: {count}</h4>
      <button onClick={() => handleClick("One")}>One</button>
      <button onClick={() => handleClick("Two")}>Two</button>
    </div>
  );
}

export default IncrementButtons;
