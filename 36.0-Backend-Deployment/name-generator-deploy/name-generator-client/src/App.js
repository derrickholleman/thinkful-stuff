import React, { useState, useEffect } from "react";

const App = () => {
  const [name, setName] = useState([]);

  useEffect(() => {
    fetch("https://name-generator-server1220.herokuapp.com/generate")
      .then((res) => res.json())
      .then((nme) => setName([nme]));
  }, []);

  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default App;
