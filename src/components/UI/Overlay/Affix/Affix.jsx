import { useEffect, useState } from "react";
import { Button } from "../../../UI";

export const Affix = ({ parentPath }) => {
  const [showed, setShowed] = useState(false);
  const handleScroll = () => {
    document.getElementsByClassName(parentPath)[0].scrollTop > 250
      ? setShowed(true)
      : setShowed(false);
  };
  useEffect(() => {
    document.getElementsByClassName(parentPath)[0].addEventListener("scroll", handleScroll);
    return () => {
      document.getElementsByClassName(parentPath)[0].removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    document.getElementsByClassName(parentPath)[0].scrollTop = 0;
  };
  return (
    <>
      {showed && (
        <div className="afix">
          <Button color="info" variant="light" onClick={scrollToTop}>
            Scroll to top
          </Button>
        </div>
      )}
    </>
  );
};

export default Affix;
