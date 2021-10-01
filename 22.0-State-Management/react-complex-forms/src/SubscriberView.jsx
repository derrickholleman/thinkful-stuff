import React from "react";

const SubscriberView = ({ subscriber }) => {
  let subscribeStatus;
  if (subscriber.subscription === true) {
    subscribeStatus = "subbed";
  } else {
    subscribeStatus = "not subbed";
  }
  return (
    <div>
      <p>Name: {subscriber.name}</p>
      <p>Email: {subscriber.email}</p>
      <p>Referral Method: {subscriber.referral}</p>
      <p>Age: {subscriber.age}</p>
      <p>{subscribeStatus}</p>
    </div>
  );
};

export default SubscriberView; is it fixed?
