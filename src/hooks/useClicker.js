import { useEffect, useState } from "react";

export default function useClicker(elemRef) {
    const [clicks, setClicks] = useState(0);
    const clickListener = () => setClicks((clicksState) => clicksState + 1);
  
    useEffect(() => {
      const elem = elemRef.current;
  
      if (elem) {
        elem.addEventListener("click", clickListener);
      }
  
      return () => {
        if (elem) {
          elem.removeEventListener("click", clickListener);
        }
      };
    }, [elemRef]);
  
    return clicks;
  } 