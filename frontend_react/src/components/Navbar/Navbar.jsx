import React, { useState, useRef } from "react";
import "./Navbar.scss";
import { images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const logoRef = useRef(null); // Reference to the logo element

  const handleLogoClick = (e) => {
    if (e.key === "p") {
      e.preventDefault(); 

      
      window.open("https://aman-portfolio-sanity-studio.netlify.app", "_blank");
    }
  };

  const handleLogoFocus = () => {
    logoRef.current.blur(); // Remove focus from logo when 'p' is pressed
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img
          src={images.logo}
          alt="logo"
          ref={logoRef}
          onClick={handleLogoClick}
          onKeyDown={(e) => {
            if (e.key === "p") {
              handleLogoClick(e);
              handleLogoFocus();
            }
          }}
          tabIndex="0" // Ensure the image is focusable
        />
      </div>
      <ul className="app__navbar-links">
        {["Home", "About", "Work", "Skills", "Contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [200, 20] }}
            transition={{ duration: 0.5, ease: "linear" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul className="app__navbar-links">
              {["Home", "About", "Work", "Skills", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
