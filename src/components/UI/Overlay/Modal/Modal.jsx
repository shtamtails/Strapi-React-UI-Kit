import React, { useEffect, useRef, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { useClickOutside } from "../../../../Hooks";

export const Modal = ({ children, title, modal, setModal }) => {
  const ref = useRef(null);
  useClickOutside(ref, () => {
    handleCloseClick();
  });

  const handleCloseClick = () => {
    setIsVisible("modal-hidden");
    setTimeout(() => {
      setModal(false);
    }, 300);
  };

  const [isVisible, setIsVisible] = useState("modal-hidden");

  useEffect(() => {
    setIsVisible("modal-visible");
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  return (
    <div className={isVisible}>
      <div ref={ref} className="modal">
        <div className="header">
          <div className="title">{title}</div>
          <div className="close-btn" onClick={handleCloseClick}>
            <IoIosClose />
          </div>
        </div>
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
