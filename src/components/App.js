import "../css/main.css";
import React, { useState } from "react";
import { Autocomplete, Select, Button } from "./UI/";
import { useUniqueId } from "../Hooks/";

// TODO's
// Add ref functionality to input elements to obtain their value without using state
// Add clear button to Autocomplete component
// use propTypes.oneOf insatead of useCorrectType

const App = () => {
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(false);

  const options = [
    { id: useUniqueId(), text: "Disable Comments", value: "disableComments" },
    { id: useUniqueId(), text: "Enable Comments", value: "enableComments" },
    { id: useUniqueId(), text: "Hide Comments", value: "hideComments" },
  ];

  return (
    <>
      <Button value={value} setValue={setValue}>
        Click me
      </Button>
    </>
  );
};

export default App;
