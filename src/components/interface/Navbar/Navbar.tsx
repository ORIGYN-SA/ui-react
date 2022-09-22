import React from "react";
import "./styles.css";
import Button from "../Button";
import ThemeIcon from "../../icons/theme";
import OrigynIcon from "../../icons/origyn";

const Navbar = ({ children }) => {
  return (
    <div className="flex-container">

      {/* container 1 */}
      <div className="container1">
        <div className="topItem1">
          <OrigynIcon />
        </div>
        <div className="topItem2">
          {children}
        </div>
      </div>

      {/* container 2 */}
      <div className="container2">
        <div className="bottomItem1">  
          <Button btnType="small">Connect</Button>
        </div>
        <div className="bottomItem2">
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
