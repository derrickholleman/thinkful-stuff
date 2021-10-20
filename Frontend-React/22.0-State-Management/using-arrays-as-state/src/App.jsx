import React, { useState } from "react";
import ClickTimes from "./ClickTimes";
import TimestampsDisplay from "./TimestampsDisplay";

function App() {
  const [timestamps, setTimeStamps] = useState([])
  
  const getCurrentTime = () => {
    setTimeStamps([...timestamps, Date.now()])
  }
  
  return (
    <div>
      <TimestampsDisplay timestamps={timestamps} />
      <ClickTimes getCurrentTime={getCurrentTime}/>
    </div>
  )
  
}

export default App;
