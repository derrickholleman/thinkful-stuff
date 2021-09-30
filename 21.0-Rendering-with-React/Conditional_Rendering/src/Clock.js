import React from "react";

function Clock() {
  let newDate = new Date()
  let displayGreeting

  if (newDate.getHours() < 12) {
    displayGreeting = 'Good Morning!'
  } else if (newDate.getHours() >= 12 && newDate.getHours() <= 18) {
    displayGreeting = 'Good Afternoon!'
  } else {
    displayGreeting = 'Good Evening!'
  }

  return (
    <div>
      {displayGreeting}
    </div>
    );
}

export default Clock;
