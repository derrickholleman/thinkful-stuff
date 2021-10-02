import React, { useState } from "react";
import "./App.css";

const RSVPForm = () => {
  const formState = {
    name: "",
    age: "",
    member_status: false,
    comment: "",
  };

  const [formData, setFormData] = useState({ ...formState });
  const handleChange = ({ target }) => {
    let value 
    target.type === "checkbox" ? value = target.checked : value = target.value
    
    setFormData({
      ...formData,
      [target.id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData.name, formData.age, formData.member_status, formData.comment);
    setFormData({ ...formState })
   
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" onChange={handleChange} value={formData.name}/>
      <label htmlFor="age">What is your age?</label>
      <select id="age" onChange={handleChange} value={formData.age}>
        <option value="Prefer not to say">Prefer not to say</option>
        <option value="0-19">0-19</option>
        <option value="20-39">20-39</option>
        <option value="40-59">40-59</option>
        <option value="60+">60+</option>
      </select>
      <label htmlFor="member_status">
        Are you a new member?
        <input id="member_status" type="checkbox" onChange={handleChange} value={formData.member_status}/>
      </label>
      <label htmlFor="comment">Comment</label>
      <input type="text" id="comment" onChange={handleChange} value={formData.comment}/>
      <button type="submit">Submit</button>
    </form>
  );
};

export default RSVPForm;
