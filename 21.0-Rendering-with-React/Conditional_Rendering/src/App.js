import React from "react";
import Clock from "./Clock";

function App({loggedIn}) {
  return (
    <div>
      {loggedIn && <Clock/> }
    </div>
  )
}

export default App;
