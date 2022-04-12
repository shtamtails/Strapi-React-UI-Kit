import "../css/main.css";
import Navbar from "./Navbar";
import Checkbox from "./Checkbox";
import { useState } from "react";

// ! Add color chose to every input component

const App = () => {
  const [subscriptionCheckbox, setSubscriptionCheckbox] = useState(true);
  console.log(subscriptionCheckbox);
  return (
    <>
      <Navbar />
      <div className="container-main">
        <Checkbox
          isChecked={subscriptionCheckbox}
          setChecked={setSubscriptionCheckbox}
          label="I agree to sell my privacy"
          disabled
        />
      </div>
    </>
  );
};

export default App;
