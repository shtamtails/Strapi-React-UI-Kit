import { useState } from "react";
import { NavbarAccordion } from "./NavbarAccordion";
import { NavbarAccordionItem } from "./NavbarAccordionItem";
import { FaAngleLeft } from "react-icons/fa";

export const Navbar = ({ children, width, collapsable, collapse, setCollapse, withHeader }) => {
  const [navbarWidth, setNavbarwidth] = useState(width);

  const btnStyles = ["collapse-btn"];
  const navbarStyles = ["navbar"];
  withHeader && navbarStyles.push("vh100-header");
  const btnMargin = { left: `${!collapse ? `${width - 40}px` : `50px`}` };
  collapse && btnStyles.push("collapse-btn-opened");
  const handleCollapseClick = () => {
    setCollapse(!collapse);
    !collapse ? setNavbarwidth(60) : setNavbarwidth(width);
  };

  return (
    <div className={navbarStyles.join(" ")} style={{ width: navbarWidth }}>
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

Navbar.defaultProps = {};

export default Navbar;
