import { useEffect } from "react";

export const useElementWidth = (ref, handler) => {
  useEffect(() => {
    (function () {
      if (ref.current !== null) {
        handler(ref.current.offsetWidth);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useElementWidth;
