import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("/");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/" onClick={() => handleLinkClick("/")}>
          The Villagers
        </a>
      </div>
      <ul className="navbar-links">
        <li>
          <a
            href="/products"
            className={activeLink === "/products" ? "active" : ""}
            onClick={() => handleLinkClick("/products")}
          >
            Products
          </a>
        </li>
        <li>
          <a
            href="/about"
            className={activeLink === "/about" ? "active" : ""}
            onClick={() => handleLinkClick("/about")}
          >
            About Us
          </a>
        </li>
        <li>
          <a
            href="/contact"
            className={activeLink === "/contact" ? "active" : ""}
            onClick={() => handleLinkClick("/contact")}
          >
            Contact
          </a>
        </li>
      </ul>
      <div className="navbar-search">
        <input type="text" placeholder="Search products..." />
        <button type="submit">Search</button>
      </div>
      <div className="navbar-icons">
        <a href="/cart" className="icon-link">
          🛒
        </a>
        <a href="/profile" className="icon-link">
          👤
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
