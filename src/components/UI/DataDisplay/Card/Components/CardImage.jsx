import React from "react";

export const CardImage = ({ src, alt, height }) => {
  return (
    <div className="image" style={{ height: height }}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default CardImage;
