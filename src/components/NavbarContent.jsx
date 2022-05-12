import React, { useEffect } from "react";
import { Navbar } from "./UI";
import { NavLink } from "react-router-dom";

export const NavbarContent = () => {
  const handleClick = (e) => {
    console.log(e.target.classList.add("current"));
  };
  const activePage = {
    backgroundColor: "#f0f0ff",
    borderLeft: "1px solid #7b79ff",
  };
  return (
    <>
      <Navbar.Accordion>
        <Navbar.AccordionItem title="INPUTS">
          <NavLink style={({ isActive }) => (isActive ? activePage : undefined)} to="/actionicon">
            <div className="link" onSelect={handleClick}>
              Action Icon
            </div>
          </NavLink>
          <NavLink style={({ isActive }) => (isActive ? activePage : undefined)} to="/autocomplete">
            <div className="link" onSelect={handleClick}>
              Autocomplete
            </div>
          </NavLink>
          <NavLink style={({ isActive }) => (isActive ? activePage : undefined)} to="/select">
            <div className="link">Select</div>
          </NavLink>
          <NavLink style={({ isActive }) => (isActive ? activePage : undefined)} to="/button">
            <div className="link">Button</div>
          </NavLink>
          <NavLink style={({ isActive }) => (isActive ? activePage : undefined)} to="/checkbox">
            <div className="link">Checkbox</div>
          </NavLink>
          <NavLink style={({ isActive }) => (isActive ? activePage : undefined)} to="/switch">
            <div className="link">Switch</div>
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activePage : undefined)}
            to="/passwordinput"
          >
            <div className="link">Password Input</div>
          </NavLink>
          <NavLink style={({ isActive }) => (isActive ? activePage : undefined)} to="/textinput">
            <div className="link">Text Input</div>
          </NavLink>
          <NavLink style={({ isActive }) => (isActive ? activePage : undefined)} to="/textarea">
            <div className="link">Text Area</div>
          </NavLink>
        </Navbar.AccordionItem>
        <Navbar.AccordionItem title="Data Display">
          <NavLink style={({ isActive }) => (isActive ? activePage : undefined)} to="/accordion">
            <div className="link">Accordion</div>
          </NavLink>
          <NavLink style={({ isActive }) => (isActive ? activePage : undefined)} to="/card">
            <div className="link">Card</div>
          </NavLink>
          <NavLink style={({ isActive }) => (isActive ? activePage : undefined)} to="/kbd">
            <div className="link">Kbd</div>
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activePage : undefined)}
            to="/notifications"
          >
            <div className="link">Notifications</div>
          </NavLink>
        </Navbar.AccordionItem>
        <Navbar.AccordionItem title="Overlay">
          <NavLink style={({ isActive }) => (isActive ? activePage : undefined)} to="/affix">
            <div className="link">Affix</div>
          </NavLink>
          <NavLink style={({ isActive }) => (isActive ? activePage : undefined)} to="/modal">
            <div className="link">Modal</div>
          </NavLink>
        </Navbar.AccordionItem>
        <Navbar.AccordionItem title="Testing">
          <NavLink style={({ isActive }) => (isActive ? activePage : undefined)} to="/test">
            <div className="link">Test page</div>
          </NavLink>
        </Navbar.AccordionItem>
      </Navbar.Accordion>
    </>
  );
};

export default NavbarContent;
