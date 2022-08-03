import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div class="header">
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/cart">Cart</Link>
      </div>
      <div>
        <Link to="/signin">Sign In</Link>
      </div>
      <div>
        <Link to="/signOut">Sign Out</Link>
      </div>
    </div>
  );
}
