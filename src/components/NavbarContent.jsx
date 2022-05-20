import React from "react";
import { Navbar } from "./UI";
import { NavLink } from "react-router-dom";
import { componentsList } from "./ComponentsList";

export const NavbarContent = () => {
  const activePage = {
    backgroundColor: "#f0f0ff",
    borderLeft: "1px solid #7b79ff",
  };

  const inputsTopic = componentsList.filter((el) => {
    return el.topic === "inputs";
  });
  const dataDisplayTopic = componentsList.filter((el) => {
    return el.topic === "dataDisplay";
  });
  const overlayTopic = componentsList.filter((el) => {
    return el.topic === "overlay";
  });
  const utilsTopic = componentsList.filter((el) => {
    return el.topic === "utils";
  });
  return (
    <>
      <Navbar.Accordion multiple>
        <Navbar.AccordionItem title="INPUTS">
          {inputsTopic.map((el) => {
            return (
              <NavLink
                key={el.id}
                style={({ isActive }) => (isActive ? activePage : undefined)}
                to={el.link}
              >
                <div className="link">{el.name}</div>
              </NavLink>
            );
          })}
        </Navbar.AccordionItem>
        <Navbar.AccordionItem title="Data Display">
          {dataDisplayTopic.map((el) => {
            return (
              <NavLink
                key={el.id}
                style={({ isActive }) => (isActive ? activePage : undefined)}
                to={el.link}
              >
                <div className="link">{el.name}</div>
              </NavLink>
            );
          })}
        </Navbar.AccordionItem>
        <Navbar.AccordionItem title="Overlay">
          {overlayTopic.map((el) => {
            return (
              <NavLink
                key={el.id}
                style={({ isActive }) => (isActive ? activePage : undefined)}
                to={el.link}
              >
                <div className="link">{el.name}</div>
              </NavLink>
            );
          })}
        </Navbar.AccordionItem>
        <Navbar.AccordionItem title="Utils">
          {utilsTopic.map((el) => {
            return (
              <NavLink
                key={el.id}
                style={({ isActive }) => (isActive ? activePage : undefined)}
                to={el.link}
              >
                <div className="link">{el.name}</div>
              </NavLink>
            );
          })}
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
