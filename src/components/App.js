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
  const [value, setValue] = useState("Select");
  const [btn, setBtn] = useState(false);
  const ref = useRef(null);

  const options = [
    {
      id: 1,
      value: "1",
      text: "1",
    },
    {
      id: 2,
      value: "2",
      text: "2",
    },
    {
      id: 3,
      value: "3",
      text: "3",
    },
  ];

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
            <TextInput ref={ref} />
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
        <Select label="Basic Select" optionsList={options} value={value} setValue={setValue} />
        <Autocomplete
          label="Autocomplete"
          optionsList={options}
          value={value}
          setValue={setValue}
        />
      </div>
    </>
  );
};

export default App;
