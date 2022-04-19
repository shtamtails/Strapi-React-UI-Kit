import "../css/main.css";
import React, { useState } from "react";
import { PasswordInput } from "./UI/Inputs";
import { useUniqueId } from "./Hooks/useUniqueId";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("Select");

  const options = [
    { id: useUniqueId(), text: "text1", value: "value1" },
    { id: useUniqueId(), text: "text2", value: "value2" },
    { id: useUniqueId(), text: "text3", value: "value3" },
  ];
  return (
    <>
      <PasswordInput value={value} setValue={setValue} loading />
    </>
  );
};

export default App;
