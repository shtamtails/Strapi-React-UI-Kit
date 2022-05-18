import Loader from "../../Utils/Loader/Loader";

export const ActionIcon = ({ children, size, type, color, loading, disabled }) => {
  const styles = ["action-icon"];
  (loading || disabled) && styles.push("action-icon-disabled");
  size && styles.push(`icon-${size}`);
  type && styles.push(`icon-${type}-${color}`);
  return (
    <>
      <button className={styles.join(" ")}>{loading ? <Loader /> : children}</button>
    </>
  );
};

ActionIcon.defaultProps = {
  size: "md",
  type: "light",
  color: "primary",
};

export default ActionIcon;
