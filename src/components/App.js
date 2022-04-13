import "../css/main.css";
import Navbar from "./Navbar";
import Checkbox from "./Checkbox/";
import { useState } from "react";

const App = () => {
  const [checkbox, setCheckbox] = useState(false);
  return (
    <>
      <Navbar />
      <main className="container-main">
        <Checkbox
          label="test"
          description="test"
          checkboxState={checkbox}
          changeCheckedState={() => setCheckbox(!checkbox)}
        />
      </main>
    </>
  );
};

export default App;
