import React from "react";
import "./HobbyList.css";

function HobbyList({ hobbies }) {
  return (
    <div>
      <h4>Hobbies</h4>
      {hobbies.map((hobby, index) => (
        <ul>
          <li key={index}>{hobby}</li>
        </ul>
      ))}
    </div>
  );
}

export default HobbyList;
