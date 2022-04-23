import "../css/main.css";
import React, { useRef, useState } from "react";
import {
  SkeletonContainer,
  Skeleton,
  Divider,
  TextInput,
  Button,
  Accordion,
  Autocomplete,
  Select,
} from "./UI/";

// TODO's
// Add ref functionality to input elements to obtain their value without using state
// Add copy btn to TextInput

const App = () => {
  const [value, setValue] = useState("FS6485SPZLR69KX9VBH6GZSREV4P39");
  const [btn, setBtn] = useState(false);
  const ref = useRef(null);

  return (
    <>
      <div style={{ width: "1100px", margin: "0 auto" }}>
        <SkeletonContainer>
          <Skeleton circle width="50px" height="50px" style={{ marginTop: "50px" }} />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </SkeletonContainer>

        <div className="div" style={{ display: "flex", marginTop: "50px" }}>
          <div className="div" style={{ width: "100%" }}>
            <TextInput copy={false} value={value} setValue={setValue} />
          </div>

          <div className="div" style={{ display: "flex", width: "15%" }}>
            <Button
              value={btn}
              setValue={setBtn}
              onClick={() => {
                console.log(ref.current.value);
              }}
            >
              Click
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
