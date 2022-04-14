import "../css/main.css";
import { Checkbox } from "./Inputs";
import { useState } from "react";

// TODO add size prop to inputs
// ! Delete input-label if label is not added

const App = () => {
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(true);
  return (
    <>
      <Checkbox value={value} setValue={setValue} disabled label="Label" labelBg />
    </>
  );
};

export default App;
