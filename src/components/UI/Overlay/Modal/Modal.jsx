import React, { useEffect, useRef, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { useClickOutside } from "../../../../Hooks";

export const Modal = ({ children, title, setModal, width }) => {
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
  }, []);

  return (
    <div className={isVisible}>
      <div ref={ref} className="modal" style={{ width: `${width}` }}>
        <div className="modal-header">
          <div className="title">{title}</div>
          <div className="modal-close-btn" onClick={handleCloseClick}>
            <IoIosClose />
          </div>
        </div>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
