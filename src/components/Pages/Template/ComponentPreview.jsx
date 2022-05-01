import React from "react";

export const ComponentPreview = ({ component, settings, height }) => {
  return (
    <div className="component-preview">
      <div className="component" style={{ height: `${height}px` }}>
        {component}
      </div>
      {settings && <div className="settings">{settings}</div>}
    </div>
  );
};

export default ComponentPreview;
