import { useState } from "react";
import { createEmptyList } from "./Utils";
import { AccordionItem } from "./AccordionItem";

export const Accordion = ({ children, multiple }) => {
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

Accordion.Item = AccordionItem;

export default Accordion;
