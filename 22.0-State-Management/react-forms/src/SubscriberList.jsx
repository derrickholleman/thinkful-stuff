import React from "react";
import SubscriberView from "./SubscriberView";

const SubscriberList = ({ subscribers, deleteSubscriber }) => {
  return (
    <div>
      <h2>Subscribers</h2>
      <ul>
        {subscribers.map((subscriber, index) => (
          <SubscriberView
            // provide each subscriber with a delete functionality
            deleteSubscriber={() => deleteSubscriber(index)}
            key={index}
            // passing name and email as props
            subscriber={subscriber}
          />
        ))}
      </ul>
    </div>
  );
};

export default SubscriberList;
