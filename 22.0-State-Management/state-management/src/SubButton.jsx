import React, { useState } from "react";

const SubButton = () => {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    setSubscribed(!subscribed);
  };

  return (
    <div>
      <p>
        {subscribed
          ? "Thank you for subscribing!"
          : "Click the button to subscribe."}
      </p>
      <button onClick={handleSubscribe}>
        {subscribed ? "Unsubscribe" : "Subscribe"}
      </button>
    </div>
  );
};

export default SubButton;
