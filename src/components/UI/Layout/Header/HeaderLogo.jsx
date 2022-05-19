export const HeaderLogo = ({ logo, text, subtext, collapse }) => {
  const logoStyles = ["navbar-logo"];

  return (
    <div className={logoStyles.join(" ")}>
      <div className="logo">
        {logo}
        <div className="text" style={{ opacity: `${collapse ? "0" : "1"}` }}>
          <div className="main_text">{text}</div>
          <div className="sub_text">{subtext}</div>
        </div>
      </div>
    </div>
  );
};
