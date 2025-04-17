import React, { useState, useEffect } from 'react'
import "./Navbar.css"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar_container">
        <div className="navbar_logo">
          <h3><span>H</span>ouse Cleaning</h3>
        </div>
        <div className="navbar_links">
          <div className="navbar_link">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="navbar_btn">
          BOOK NOW
        </div>
      </div>
    </div>
  );
};

export default Navbar;
