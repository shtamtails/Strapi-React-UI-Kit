import React, { useState } from "react";
import { NavbarAccordion, NavbarAccordionItem, NavbarLogo } from "./Components";
import { FaAngleLeft } from "react-icons/fa";

export const Navbar = ({ children, width, collapsable, collapse, setCollapse }) => {
  const [navbarWidth, setNavbarwidth] = useState(width);

  const btnStyles = ["collapse-btn"];
  const btnMargin = { left: `${!collapse ? `${width - 40}px` : `50px`}` };
  collapse && btnStyles.push("collapse-btn-opened");
  const handleCollapseClick = () => {
    setCollapse(!collapse);
    !collapse ? setNavbarwidth(60) : setNavbarwidth(width);
  };

  return (
    <div className="navbar" style={{ width: navbarWidth }}>
      {children}
      {collapsable && (
        <div className={btnStyles.join(" ")} style={btnMargin} onClick={handleCollapseClick}>
          <FaAngleLeft />
        </div>
      )}
    </div>
  );
};

Navbar.Accordion = NavbarAccordion;
Navbar.AccordionItem = NavbarAccordionItem;
Navbar.Logo = NavbarLogo;

Navbar.defaultProps = {
  width: 260,
};

export default Navbar;
