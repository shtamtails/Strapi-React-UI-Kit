import "../css/main.css";
import { Button } from "./UI/Inputs";
import React, { useState } from "react";

const App = () => {
  const [value, setValue] = useState(false);

  return (
    <Button value={value} setValue={setValue} type="success" variant="light" disabled>
      Click me!
    </Button>
  );
};

export default App;
