import "./App.css";
import { useState } from 'react'
import SubscriberForm from "./SubscriberForm";
import SubscriberList from "./SubscriberList";

function App() {
  const [subscribers, setSubscribers] = useState([]);

  console.log("List of subscribers:", subscribers)

  const createSubscriber = (newSubscriber) =>
    // newSubscriber takes in name and email destructured values from Form component
    setSubscribers((subscribers) => [newSubscriber, ...subscribers]);

  return (
    <div className="App">
      <SubscriberForm createSubscriber={createSubscriber}/>
      <SubscriberList subscribers={subscribers}/>
    </div>
  );
}

export default App;
