import React from "react";
import "./styles.css";

const Navbar = ({ children }) => {
  return (
    <nav className="nav">
      <ul>{children}</ul>
    </nav>
  );
};

export const CustomLink = ({ href, children, ...props }) => {
  const path = window.location.pathname;

  return (
    <li className={path === href ? " active " : " "}>
      <a href={href} {...props}>
        {children}
      </a>
    </li>
  );
};

export default Navbar;
