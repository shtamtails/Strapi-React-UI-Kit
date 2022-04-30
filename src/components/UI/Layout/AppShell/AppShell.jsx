import React from "react";

export const AppShell = ({ navbar, children }) => {
  return (
    <div className="container__main">
      {navbar}
      <div className="content">{children}</div>
    </div>
  );
};

export default AppShell;
