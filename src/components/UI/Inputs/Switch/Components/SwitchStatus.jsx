import React from "react";

export const SwitchStatus = ({ showStatus, value, disabled }) => {
  const statusStyles = ["switch-status"];
  value ? statusStyles.push("status-true") : statusStyles.push("status-false");
  disabled && statusStyles.push("status-disabled");

  return (
    <>
      {showStatus && <div className={statusStyles.join(" ")}>{value ? "Enabled" : "Disabled"}</div>}
    </>
  );
};

export default SwitchStatus;
