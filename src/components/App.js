import "../css/main.css";
import { Select, TextInput } from "./Inputs";
import { useState } from "react";
import { useUniqueId } from "./Hooks/useUniqueId";

// TODO add size prop to inputs

const App = () => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("def");

  const options = [
    { id: useUniqueId(), text: "text1", value: "value1" },
    { id: useUniqueId(), text: "text2", value: "value2" },
    { id: useUniqueId(), text: "text3", value: "value3" },
  ];

  console.log(value);
  return (
    <>
      <Select
        required
        value={value}
        setValue={setValue}
        label="Input Label"
        description="description"
        optionsList={options}
        placeholder="Placeholder"
        loading={loading}
      />
    </>
  );
};

export default App;
