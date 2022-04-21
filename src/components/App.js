import "../css/main.css";
import React, { useState } from "react";
import Skeleton from "./Utils/Components/Skeleton/Skeleton";
import SkeletonContainer from "./Utils/Components/Skeleton/SkeletonContainer";

// TODO's
// Add ref functionality to input elements to obtain their value without using state
// Add clear button to Autocomplete component
// use propTypes.oneOf insatead of useCorrectType

const App = () => {
  return (
    <>
      <SkeletonContainer width="60%">
        <Skeleton circle width="50px" height="50px" style={{ marginTop: "50px" }} />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </SkeletonContainer>
    </>
  );
};

export default App;
