import React, { useState } from "react";

const SubscriberForm = ({ createSubscriber }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createSubscriber({ name, email });
    // clear form inputs
    setName("");
    setEmail("");
  };

  return (
    <div style={{ paddingTop: "2rem" }}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Enter Your Name:
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label htmlFor="email">
          Your Email:
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SubscriberForm;
