import React from "react";
import { Navbar } from "./UI";
import { Link } from "react-router-dom";

export const NavbarContent = () => {
  return (
    <>
      <Navbar.Accordion>
        <Navbar.AccordionItem title="INPUTS">
          <Link to="#">
            <div className="link current">Action Icon</div>
          </Link>
          <Link to="#">
            <div className="link">Autocomplete</div>
          </Link>
          <Link to="#">
            <div className="link">Select</div>
          </Link>
          <Link to="#">
            <div className="link">Button</div>
          </Link>
          <Link to="#">
            <div className="link">Checkbox</div>
          </Link>
          <Link to="#">
            <div className="link">Switch</div>
          </Link>
          <Link to="#">
            <div className="link">Password Input</div>
          </Link>
          <Link to="#">
            <div className="link">Text Input</div>
          </Link>
          <Link to="#">
            <div className="link">Text Area</div>
          </Link>
        </Navbar.AccordionItem>
        <Navbar.AccordionItem title="Data Display">
          <Link to="/accordion">
            <div className="link">Accordion</div>
          </Link>
          <Link to="/card">
            <div className="link">Card</div>
          </Link>
          <Link to="#">
            <div className="link">Kbd</div>
          </Link>
        </Navbar.AccordionItem>
        <Navbar.AccordionItem title="Overlay">
          <Link to="#">
            <div className="link">Affix</div>
          </Link>
          <Link to="#">
            <div className="link">Modal</div>
          </Link>
        </Navbar.AccordionItem>
      </Navbar.Accordion>
    </>
  );
};

export default NavbarContent;
