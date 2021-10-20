import "./App.css";
import { useState } from "react";
import SubscriberForm from "./SubscriberForm";
import SubscriberList from "./SubscriberList";
import DogForm from "./DogForm";

function App() {
  const [subscribers, setSubscribers] = useState([]);

  const createSubscriber = (newSubscriber) =>
    // newSubscriber takes in name and email destructured values from Form component
    setSubscribers((subscribers) => [newSubscriber, ...subscribers]);

  const deleteSubscriber = (indexToDelete) =>
    setSubscribers((subscribers) =>
      subscribers.filter((placeholder, index) => index !== indexToDelete)
    );

  return (
    <div className="App">
      <SubscriberForm createSubscriber={createSubscriber} />
      <SubscriberList
        subscribers={subscribers}
        // provide each subscriber with a delete functionality
        deleteSubscriber={deleteSubscriber}
      />
      <DogForm />
    </div>
  );
}

export default App;
