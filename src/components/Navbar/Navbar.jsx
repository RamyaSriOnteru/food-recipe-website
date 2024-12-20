import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
const Navbar = () => {
  return (
    <div className="container1">
      <div className="wrapper">
        <Link className="left">WebDev Mania</Link>
        <ul className="center">
          <li className="listItem">Home</li>
          <li className="listItem">About</li>
          <li className="listItem">Contact Us</li>
          <li className="listItem">Service</li>
        </ul>
        <div className="right">
          <input type="text" placeholder="Search..." />
          <AiOutlineSearch />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
