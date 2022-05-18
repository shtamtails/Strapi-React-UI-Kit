import { CardFooter } from "./CardFooter";
import { CardImage } from "./CardImage";
import { CardText } from "./CardText";
import { CardTitle } from "./CardTitle";

export const Card = ({ children, shadow }) => {
  return (
    <>
      <div
        className="card"
        style={
          shadow
            ? { boxShadow: "0px 5px 12px 0px rgba(34, 60, 80, 0.2)" }
            : { border: "1px solid #dcdce4" }
        }
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
