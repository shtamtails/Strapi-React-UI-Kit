export const ComponentPreview = ({ component, settings, height, width }) => {
  return (
    <div className="component-preview">
      <div className="component" style={{ height: `${height}px`, width: `${width}` }}>
        {component}
      </div>
      {settings && <div className="settings">{settings}</div>}
    </div>
  );
};

export default ComponentPreview;
