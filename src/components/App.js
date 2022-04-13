import "../css/main.css";
import { TextInput } from "./Inputs";
import { useState } from "react";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");

  return (
    <>
      <TextInput
        required
        value={value}
        setValue={setValue}
        label="Input Label"
        description="description"
        placeholder="Placeholder"
        loading={loading}
      />
    </>
  );
};

export default App;
