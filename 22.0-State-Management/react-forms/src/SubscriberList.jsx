import React from "react";
import SubscriberView from './SubscriberView'

const SubscriberList = ({subscribers, deleteSubscriber}) => {
  return (
    <div>
      <h2>Subscribers</h2>
      <ul>
        {subscribers.map((subscriber, index) => (
          <SubscriberView
            deleteSubscriber={() => deleteSubscriber(index)}
            key={index}
            subscriber={subscriber}
          />
        ))}
      </ul>
    </div>
  );
};

export default SubscriberList;
