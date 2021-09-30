import React from "react";
import "./Header.css";

function Header({ name, birthday, image }) {
  return (
    <div>
      <p>{name}</p>
      <p>{birthday}</p>
      <img src={image} alt='cat' style={{"maxWidth":"500px"}}/>
    </div>
  )
}

export default Header;
