import "../css/main.css";
import React, { useState } from "react";
import { SkeletonContainer, Skeleton, Divider, TextInput } from "./UI/";

// TODO's
// Add ref functionality to input elements to obtain their value without using state

const App = () => {
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
        <TextInput />
      </div>
    </>
  );
};

export default App;
