export const AppShell = ({ navbar, header, children }) => {
  const contentStyles = ["content"];
  header && contentStyles.push("vh100-header");
  return (
    <>
      {header}
      <div className="container__main">
        {navbar}
        <div className={contentStyles.join(" ")}>{children}</div>
      </div>
    </>
  );
};

export default AppShell;
