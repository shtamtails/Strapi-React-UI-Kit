import "../css/main.css";
import React, { useState } from "react";
import { Button } from "./UI/Inputs";

const App = () => {
  const [value, setValue] = useState(false);
  return (
    <>
      <Button value={value} setValue={setValue} type="danger" variant="light">
        Click me!
      </Button>
    </>
  );
};

export default App;
