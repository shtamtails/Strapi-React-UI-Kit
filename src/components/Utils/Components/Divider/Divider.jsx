import React from "react";
import PropTypes from "prop-types";
import DividerLine from "./Components/DividerLine";
import DividerLabel from "./Components/DividerLabel";
import DividerContainer from "./Components/DividerContainer";
export const Divider = (props) => {
  return (
    <DividerContainer padding={props.padding} width={props.width}>
      {props.children ? (
        <>
          <DividerLine height={props.height} variant={props.variant} color={props.color} />
          <DividerLabel children={props.children} />
          <DividerLine height={props.height} variant={props.variant} color={props.color} />
        </>
      ) : (
        <DividerLine height={props.height} variant={props.variant} color={props.color} />
      )}
    </DividerContainer>
  );
};

Divider.defaultProps = {
  height: "2px",
  variant: "solid",
  color: "#dcdce4",
  width: "100%",
  padding: "10px",
};

Divider.propTypes = {
  variant: PropTypes.oneOf(["solid", "dashed", "dotted"]),
  height: PropTypes.string,
  variant: PropTypes.string,
  color: PropTypes.string,
  margin: PropTypes.string,
};

export default Divider;
