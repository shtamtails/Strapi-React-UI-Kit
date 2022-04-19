import "../css/main.css";
import React, { useState } from "react";
import { Autocomplete, Select } from "./UI/Inputs";
import { useUniqueId } from "./Hooks/useUniqueId";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");

  const options = [
    { id: useUniqueId(), text: "Disable Comments", value: "disableComments" },
    { id: useUniqueId(), text: "Enable Comments", value: "enableComments" },
    { id: useUniqueId(), text: "Hide Comments", value: "hideComments" },
  ];

  return (
    <>
      <Autocomplete
        // required props
        value={value}
        setValue={setValue}
        optionsList={options}
        // optional props
        required
        loading={loading}
        label="Input label"
        description="Input description"
      />
    </>
  );
};

export default App;
