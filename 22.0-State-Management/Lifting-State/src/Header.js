import React from "react";

function Header({ loggedIn, handleLoggedInClick, increaseFontSize }) {
  return (
    <div>
      <button onClick={handleLoggedInClick}>
        {loggedIn ? "Log Out" : "Log In"}
      </button>
      <button onClick={increaseFontSize}>Increase Font Size by 2</button>
    </div>
  );
}

export default Header;
