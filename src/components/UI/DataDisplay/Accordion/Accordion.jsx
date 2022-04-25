import React, { useState } from "react";
import AccordionItem from "./Components/AccordionItem";

export const Accordion = ({ children }) => {
  let obj = {};
  children.map((item, index) => {
    return (obj[index] = false);
  });
  const [isOpened, setIsOpened] = useState(obj);
  // const postsOpenedState = Object.values(isOpened);
  const handleClick = (id) => {
    setIsOpened({ ...isOpened, [id]: !isOpened[id] });
  };

  // console.log(postsOpenedState.includes(true));
  // console.log(postsOpenedState);
  // console.log(postsOpenedState.indexOf(true));
  // if (postsOpenedState.includes(true)) {
  //   setIsOpened({ ...isOpened, [postsOpenedState.indexOf(true)]: false });
  // }

  return (
    <div className="accordion-container">
      {children.map((item, index) => {
        return (
          <AccordionItem
            key={index}
            title={item.props.title}
            isOpened={isOpened[index]}
            onClick={() => handleClick(index)}
          >
            {item.props.children}
          </AccordionItem>
        );
      })}
    </div>
  );
};

export default Accordion;
