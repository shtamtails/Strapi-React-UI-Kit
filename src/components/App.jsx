import "../css/main.css";
import React, { useEffect, useRef, useState } from "react";
import { AppShell, Navbar, Modal, TextInput, PasswordInput, Button } from "./UI";
import { NavbarContent } from "./NavbarContent";
import {
  AccordionPage,
  ActionIconPage,
  AutocompletePage,
  CardPage,
  KbdPage,
  NotificationsPage,
  SelectPage,
  ButtonPage,
  CheckboxPage,
  SwitchPage,
  PasswordInputPage,
  TextInputPage,
  TextAreaPage,
  ModalPage,
  AffixPage,
} from "./Pages";
import { Routes, Route } from "react-router-dom";
import { useUniqueId } from "../Hooks";

const logo = (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="4" fill="#4945FF" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.2804 9.3335H11.9448V20.0668L11.945 20.0669V14.6176H17.0022C17.2154 14.6176 17.3883 14.7905 17.3883 15.0037V20.0669L22.6665 20.0668V9.71958C22.6665 9.50635 22.4936 9.3335 22.2804 9.3335Z"
      fill="white"
    />
    <path
      opacity="0.404989"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9449 9.3335V14.6176H7.13219C6.96026 14.6176 6.87411 14.4098 6.99562 14.2881L11.9449 9.3335Z"
      fill="white"
    />
    <path
      opacity="0.404989"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.7173 25.0211C17.5957 25.1428 17.3877 25.0567 17.3877 24.8847V20.067H22.666L17.7173 25.0211Z"
      fill="white"
    />
    <path
      opacity="0.404989"
      d="M11.9448 14.6177H17.1951C17.3017 14.6177 17.3881 14.7041 17.3881 14.8107V20.0669H12.3309C12.1177 20.0669 11.9448 19.8941 11.9448 19.6808V14.6177Z"
      fill="white"
    />
  </svg>
);

// TODO
// ? NOTIFICATIONS
// add notification loading on load functionality
// add notification autoclose functionality
// move notifications to top
// ? Autocomplete / Select
// add default option and its value is text but not value prop
// Autocomplete value verify, maybe use the same method as the select component
// Remove value requirement in select/autocomplete pages
// ? GENERAL
// Change ref to useref in parent components

const App = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      {modal && (
        <Modal title="Create new account" modal={modal} setModal={setModal}>
          <form>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
              <div style={{ marginRight: "5px", width: "100%" }}>
                <TextInput label="First Name" placeholder="John" required />
              </div>
              <div style={{ marginLeft: "5px", width: "100%" }}>
                <TextInput label="Last Name" placeholder="Doe" required />
              </div>
            </div>
            <div style={{ marginTop: "10px" }}>
              <TextInput
                label="Username"
                description="You can change it later"
                required
                placeholder="johndoe"
              />
            </div>

            <div style={{ marginTop: "10px" }}>
              <TextInput
                label="E-mail"
                description="We will send confirmation message on this adress"
                required
                placeholder="johndoe@mail.com"
              />
            </div>

            <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
              <div style={{ marginRight: "5px", width: "100%" }}>
                <PasswordInput label="Password" required />
              </div>
              <div style={{ marginLeft: "5px", width: "100%" }}>
                <PasswordInput label="Confirm password" required />
              </div>
            </div>
            <div style={{ margin: "20px 0" }}></div>
            <Button color="success" variant="light" submit>
              Confirm
            </Button>
          </form>
        </Modal>
      )}

      <AppShell
        navbar={
          <Navbar width={260}>
            <Navbar.Logo logo={logo} text="UI-Kit" subtext="documentation" />
            <div className="navbar-items">
              <NavbarContent />
            </div>
          </Navbar>
        }
      >
        <Routes>
          <Route path="/card" element={<CardPage />} />
          <Route path="/accordion" element={<AccordionPage />} />
          <Route path="/kbd" element={<KbdPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/actionicon" element={<ActionIconPage />} />
          <Route path="/autocomplete" element={<AutocompletePage />} />
          <Route path="/select" element={<SelectPage />} />
          <Route path="/button" element={<ButtonPage />} />
          <Route path="/checkbox" element={<CheckboxPage />} />
          <Route path="/switch" element={<SwitchPage />} />
          <Route path="/passwordinput" element={<PasswordInputPage />} />
          <Route path="/textinput" element={<TextInputPage />} />
          <Route path="/textarea" element={<TextAreaPage />} />
          <Route path="/affix" element={<AffixPage />} />
          <Route path="/modal" element={<ModalPage modal={modal} setModal={setModal} />} />
        </Routes>
      </AppShell>
    </>
  );
};

export default App;
