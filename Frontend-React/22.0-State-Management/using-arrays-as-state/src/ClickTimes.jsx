import React from "react";

function ClickTimes({getCurrentTime}) {
  return (
    <div>
      <button onClick={getCurrentTime}>Get Current Time</button>
    </div>
  )
}

export default ClickTimes;
