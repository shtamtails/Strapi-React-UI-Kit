import React from "react";

export const ComponentPreview = ({ component, settings }) => {
  return (
    <div className="component-preview">
      <div className="component">{component}</div>
      <div className="settings">{settings}</div>
    </div>
  );
};

export default ComponentPreview;
