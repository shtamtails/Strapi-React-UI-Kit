import "../css/main.css";
import { Switch } from "./Inputs";
import { useState } from "react";

// TODO add size prop to inputs

const App = () => {
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(false);
  console.log(value);
  return (
    <>
      <Switch value={value} setValue={setValue} label="label" description="description" showStatus disabled />
      {/* <button onClick={() => setValue(!value)}></button> */}
    </>
  );
};

export default App;
