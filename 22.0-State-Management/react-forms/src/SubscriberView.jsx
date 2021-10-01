import React from "react";

const SubscriberView = ({subscriber, deleteSubscriber}) => {
  return (
    <div>
      <li style={{"listStyle":"none", "padding":"0px"}}>
        <p>Name: {subscriber.name}</p>
        <p>Email: {subscriber.email}</p>
        <button name="delete" onClick={deleteSubscriber}>
          Unsubscribe
        </button>
      </li>
    </div>
  );
};

export default SubscriberView;
