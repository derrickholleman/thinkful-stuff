import React from "react";

const WelcomeBack = ({name = "valued customer", adjective = "incredibly"}) => {
  // set default value of valued customer if no props are passed in

  return (
    <div>
      <p>Welcome back, {adjective} {name}!</p>
    </div>
  );
};

export default WelcomeBack;
