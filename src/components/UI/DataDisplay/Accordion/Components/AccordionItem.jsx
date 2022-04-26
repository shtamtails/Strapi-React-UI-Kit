import React, { useState, useRef, useEffect } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export const AccordionItem = ({ title, children, isOpened, onClick }) => {
  const iconStyles = [""];
  const contentStyles = [""];
  isOpened && iconStyles.push("opened");
  isOpened && contentStyles.push("displayed");
  const ref = useRef(null);
  const [height, setHeight] = useState(ref.current);
  useEffect(() => {
    isOpened ? setHeight(ref.current.scrollHeight) : setHeight(0);
  }, [isOpened]);

  return (
    <div className="accordion">
      <div className={`accordion-label`} onClick={onClick}>
        <div className={`accordion-icon${iconStyles.join(" ")}`}>
          <MdOutlineKeyboardArrowDown />
        </div>
        <div className="accordion-title">{title}</div>
      </div>
      <div
        ref={ref}
        className={`accordion-content${contentStyles.join(" ")}`}
        style={{
          height: height,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default AccordionItem;
