import React from "react";
import { Navbar } from "./UI";

export const NavbarContent = () => {
  return (
    <>
      <Navbar.Accordion>
        <Navbar.AccordionItem title="INPUTS">
          <a href="#">
            <div className="link current">Action Icon</div>
          </a>
          <a href="#">
            <div className="link">Autocomplete</div>
          </a>
          <a href="#">
            <div className="link">Select</div>
          </a>
          <a href="#">
            <div className="link">Button</div>
          </a>
          <a href="#">
            <div className="link">Checkbox</div>
          </a>
          <a href="#">
            <div className="link">Switch</div>
          </a>
          <a href="#">
            <div className="link">Password Input</div>
          </a>
          <a href="#">
            <div className="link">Text Input</div>
          </a>
          <a href="#">
            <div className="link">Text Area</div>
          </a>
        </Navbar.AccordionItem>
        <Navbar.AccordionItem title="Data Display">
          <a href="#">
            <div className="link">Accordion</div>
          </a>
          <a href="#">
            <div className="link">Card</div>
          </a>
          <a href="#">
            <div className="link">Kbd</div>
          </a>
        </Navbar.AccordionItem>
        <Navbar.AccordionItem title="Overlay">
          <a href="#">
            <div className="link">Affix</div>
          </a>
          <a href="#">
            <div className="link">Modal</div>
          </a>
        </Navbar.AccordionItem>
      </Navbar.Accordion>
    </>
  );
};

export default NavbarContent;
