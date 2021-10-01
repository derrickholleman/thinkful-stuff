import React, { useState } from "react";

const SubscriberForm = ({ createSubscriber }) => {
  const initialFormState = {
    name: "",
    email: "",
    referral: "",
    age: "",
  };
  const [formData, setFormData] = useState({ ...initialFormState });
  const handleChange = ({ target }) => {
    const value = target.type === "checkbox" ? target.checked : target.value;
    setFormData({
      ...formData,
      [target.name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted:", formData);
    // setting form data
    setFormData({ ...initialFormState });
    // creating subscriber from form data
    createSubscriber({ ...formData });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name:
        <input
          id="name"
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
        />
      </label>
      <br />
      <label htmlFor="email">
        Your Email:
        <input
          id="email"
          type="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
      </label>
      <br />
      <label htmlFor="referral">
        How did you hear about us?
        <select
          id="referral"
          name="referral"
          onChange={handleChange}
          value={formData.referral}
        >
          <option value="">-- Select an Option --</option>
          <option value="Twitter">Twitter</option>
          <option value="Word Of Mouth">Word of Mouth</option>
          <option value="Youtube">YouTube</option>
        </select>
      </label>
      <br />
      <fieldset>
        <legend>How old are you?</legend>
        <label htmlFor="low">
          Under 18
          <input
            id="low"
            type="radio"
            name="age"
            onChange={handleChange}
            value="Young"
            checked={formData.age === "Young"}
          />
        </label>
        <label htmlFor="middle">
          18 - 60
          <input
            id="middle"
            type="radio"
            name="age"
            onChange={handleChange}
            value="Middle Age"
            checked={formData.age === "Middle Age"}
          />
        </label>
        <label htmlFor="high">
          60+
          <input
            id="high"
            type="radio"
            name="age"
            onChange={handleChange}
            value="Senior"
            checked={formData.age === "Senior"}
          />
        </label>
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SubscriberForm;
