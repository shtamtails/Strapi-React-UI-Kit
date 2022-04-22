import "../css/main.css";
import React, { useRef, useState } from "react";
import { SkeletonContainer, Skeleton, Divider, TextInput, Button, Accordion } from "./UI/";

// TODO's
// Add ref functionality to input elements to obtain their value without using state
// Add copy btn to TextInput

const App = () => {
  const [value, setValue] = useState("");
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
        <Divider height="2px" variant="solid" width="1100px" padding="5px">
          Hello World
        </Divider>
        <div className="div" style={{ display: "flex" }}>
          <div className="div" style={{ width: "100%" }}>
            <TextInput value={value} setValue={setValue} ref={ref} />
          </div>

          <div className="div" style={{ display: "flex", width: "15%" }}>
            {" "}
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

        <Accordion />
      </div>
    </>
  );
};

export default App;
