import React, { useRef } from "react";
import { IoIosClose } from "react-icons/io";
import { useClickOutside } from "../../../../Hooks";

export const Modal = ({ children, title, modal, setModal }) => {
  const ref = useRef(null);
  useClickOutside(ref, () => {
    setModal(false);
  });
  return (
    <>
      {modal && (
        <div className="shadowing">
          <div ref={ref} className="modal">
            <div className="header">
              <div className="title">{title}</div>
              <div
                className="close-btn"
                onClick={() => {
                  setModal(false);
                }}
              >
                <IoIosClose />
              </div>
            </div>
            <div className="content">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
