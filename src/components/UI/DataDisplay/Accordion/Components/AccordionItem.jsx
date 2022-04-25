import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export const AccordionItem = ({ title, children, isOpened, onClick }) => {
  const iconStyles = [""];
  const contentStyles = [""];
  isOpened && iconStyles.push("opened");
  isOpened && contentStyles.push("displayed");

  return (
    <div className="accordion">
      <div className={`accordion-label`} onClick={onClick}>
        <div className={`accordion-icon${iconStyles.join(" ")}`}>
          <MdOutlineKeyboardArrowDown />
        </div>
        <div className="accordion-title">{title}</div>
      </div>
      <div className={`accordion-content${contentStyles.join(" ")}`}>{children}</div>
    </div>
  );
};

export default AccordionItem;
