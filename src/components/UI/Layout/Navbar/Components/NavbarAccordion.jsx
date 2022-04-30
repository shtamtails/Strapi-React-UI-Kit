import React from "react";
import { useState } from "react";
import { NavbarAccordionItem } from "../Components";
import { createEmptyList } from "../../../DataDisplay/Accordion/Components";

export const NavbarAccordion = ({ children, multiple }) => {
  const total = children.length;

  let postsListState = createEmptyList(total);
  const [isOpened, setIsOpened] = useState(postsListState);

  const handleClick = (index) => {
    if (multiple) {
      setIsOpened({ ...isOpened, [index]: !isOpened[index] });
    } else {
      let newPosts = createEmptyList(total);
      newPosts[index] = !isOpened[index];
      setIsOpened(newPosts);
    }
  };
  return (
    <>
      {children.map((item, index) => {
        return (
          <NavbarAccordionItem
            key={index}
            title={item.props.title}
            isOpened={isOpened[index]}
            onClick={() => handleClick(index)}
          >
            {item.props.children}
          </NavbarAccordionItem>
        );
      })}
    </>
  );
};

export default NavbarAccordion;
