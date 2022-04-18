import "../css/main.css";
import React, { useState } from "react";
import { ActionIcon } from "./UI/Inputs/";
import { GoSettings } from "react-icons/go";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  return (
    <>
      <ActionIcon
        variant="light"
        size="md"
        onClick={() => {
          console.log("clicked");
        }}
        disabled={disabled}
        loading={loading}
      >
        <GoSettings />
      </ActionIcon>
      <button
        onClick={() => {
          setLoading(!loading);
        }}
      ></button>
      <button
        onClick={() => {
          setDisabled(!disabled);
        }}
      ></button>
    </>
  );
};

export default App;
