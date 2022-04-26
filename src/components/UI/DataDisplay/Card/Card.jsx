import React from "react";
import { CardFooter, CardImage, CardText, CardTitle } from "./Components/";

export const Card = ({ children, shadow }) => {
  return (
    <>
      <div
        className="card"
        style={shadow && { boxShadow: "0px 5px 12px 0px rgba(34, 60, 80, 0.2)" }}
      >
        {children}
      </div>
    </>
  );
};

Card.Image = CardImage;
Card.Title = CardTitle;
Card.Text = CardText;
Card.Footer = CardFooter;

export default Card;
