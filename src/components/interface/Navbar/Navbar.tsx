import React from "react";
import "./styles.css";
import Button from "../Button";
import ThemeIcon from "../../../components/icons/theme";

const Navbar = ({ children }) => {
  return (
    <div className="navbar">

    <div className="component">

        <nav className="nav">
          <ul>{children}</ul>
        </nav>

        <div className="bottom-items">
          <Button btnType="small">Connect</Button>
        <ThemeIcon />
        </div>

        </div>

    </div>
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
