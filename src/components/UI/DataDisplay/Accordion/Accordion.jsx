import React, { useState } from "react";
import AccordionItem from "./Components/AccordionItem";

export const Accordion = ({ children }) => {
  const itemsLength = children.length;
  let postsState = {};
  children.map((item, index) => {
    return (postsState[index] = false);
  });
  const [isOpened, setIsOpened] = useState(postsState);

  const handleClick = (id) => {
    let newPostsState = {};
    for (let i = 0; i < itemsLength; i++) {
      newPostsState[i] = false;
    }
    newPostsState[id] = !isOpened[id];
    setIsOpened(newPostsState);
  };

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
