import "../css/main.css";
import React, { useState } from "react";
import { SkeletonContainer, Skeleton, Divider } from "./Utils/";

// TODO's
// Add ref functionality to input elements to obtain their value without using state

const App = () => {
  return (
    <>
      <div style={{ width: "1100px", margin: "0 auto" }}>
        <SkeletonContainer width="100%">
          <Skeleton circle width="50px" height="50px" style={{ marginTop: "50px" }} />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </SkeletonContainer>
      </div>
      <Divider height="2px" variant="solid" width="1100px" padding="5px">
        Hello World
      </Divider>
    </>
  );
};

export default App;
