import React, { useState, useEffect } from "react";
import "./nav.css";

function Nav() {
  const [show, setHandleShow] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setHandleShow(true);
      } else {
        setHandleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <nav className={`nav_logo ${show && "nav_black"}`}>
      <img src="/images/netflix-logo.png" alt="" />
      <img src="/images/avatar-logo.png" alt="" />
    </nav>
  );
}

export default Nav;
