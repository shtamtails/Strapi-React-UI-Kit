import "../css/main.css";
import { PasswordInput } from "./Inputs";
import { useState } from "react";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState("");

  return (
    <>
      <PasswordInput
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
