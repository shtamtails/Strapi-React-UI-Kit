import React, { useState, useRef, useEffect } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export const NavbarAccordionItem = ({ title, children, isOpened, onClick }) => {
  // Styling
  const iconStyles = ["icon"];
  const contentStyles = ["navbar-accordion-content"];
  isOpened && iconStyles.push("opened");
  isOpened && contentStyles.push("displayed");
  // Ref used to get content height
  const ref = useRef(null);
  const [height, setHeight] = useState(ref.current);
  useEffect(() => {
    isOpened ? setHeight(ref.current.scrollHeight) : setHeight(0);
  }, [isOpened]);
  return (
    <div className="navbar-accordion">
      <div className={`label`} onClick={onClick}>
        <div className={iconStyles.join(" ")}>
          <MdOutlineKeyboardArrowDown />
        </div>
        <div className="title">{title}</div>
      </div>
      <div
        ref={ref}
        className={contentStyles.join(" ")}
        style={{
          height: height,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default NavbarAccordionItem;
