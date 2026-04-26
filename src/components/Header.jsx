import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

const Header = () => {
  return (
    <nav className="flex items-center justify-between pa3">
      <img src={logo} alt="logo" style={{ width: "40px" }} />

      <div>
        <Link to="/" className="link dim black pa2">Products</Link>
        <Link to="/cart" className="link dim black pa2">Cart</Link>
        <Link to="/contact" className="link dim black pa2">Contact</Link>
      </div>
    </nav>
  );
};

export default Header;