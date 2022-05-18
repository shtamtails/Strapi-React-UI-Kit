export const CardTitle = ({ children, badge }) => {
  return (
    <div className="title-container">
      <div className="title">{children}</div>
      <div className="badge">{badge}</div>
    </div>
  );
};

export default CardTitle;
