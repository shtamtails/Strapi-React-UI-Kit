import React from "react";
import { Navbar } from "./UI";
import { NavLink } from "react-router-dom";

export const NavbarContent = () => {
  const activePage = {
    backgroundColor: "#f0f0ff",
    borderLeft: "1px solid #7b79ff",
  };

  const items = [
    {
      id: 0,
      name: "Action Icon",
      link: "/actionicon",
      topic: "inputs",
    },
    {
      id: 1,
      name: "Autocomplete",
      link: "/autocomplete",
      topic: "inputs",
    },
    {
      id: 2,
      name: "Select",
      link: "/select",
      topic: "inputs",
    },
    {
      id: 3,
      name: "Button",
      link: "/button",
      topic: "inputs",
    },
    {
      id: 4,
      name: "",
      link: "/checkbox",
      topic: "inputs",
    },
    {
      id: 5,
      name: "",
      link: "/switch",
      topic: "inputs",
    },
    {
      id: 6,
      name: "",
      link: "/passowrdinput",
      topic: "inputs",
    },
    {
      id: 7,
      name: "",
      link: "/textinput",
      topic: "inputs",
    },
    {
      id: 8,
      name: "",
      link: "/textarea",
      topic: "inputs",
    },
    {
      id: 9,
      name: "",
      link: "/accordion",
      topic: "dataDisplay",
    },
    {
      id: 10,
      name: "",
      link: "/card",
      topic: "dataDisplay",
    },
    {
      id: 11,
      name: "",
      link: "/kbd",
      topic: "dataDisplay",
    },
    {
      id: 12,
      name: "",
      link: "/notifications",
      topic: "dataDisplay",
    },
    {
      id: 13,
      name: "",
      link: "/affix",
      topic: "overlay",
    },
    {
      id: 14,
      name: "",
      link: "/modal",
      topic: "overlay",
    },
    {
      id: 15,
      name: "",
      link: "/skeleton",
      topic: "utils",
    },
    {
      id: 16,
      name: "",
      link: "/divider",
      topic: "utils",
    },
  ];
  const inputsTopic = items.filter((el) => {
    return el.topic === "inputs";
  });
  const overlayTopic = items.filter((el) => {
    return el.topic === "datadisplay";
  });
  const dataDisplayTopic = items.filter((el) => {
    return el.topic === "overlay";
  });
  const utilsTopic = items.filter((el) => {
    return el.topic === "utils";
  });
  console.log(inputsTopic.map((el) => console.log(el.name)));
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
        <Navbar.AccordionItem title="Utils">
          <NavLink style={({ isActive }) => (isActive ? activePage : undefined)} to="/skeleton">
            <div className="link">Skeleton</div>
          </NavLink>
          <NavLink style={({ isActive }) => (isActive ? activePage : undefined)} to="/divider">
            <div className="link">Divider</div>
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
