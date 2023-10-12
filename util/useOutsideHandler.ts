import { useEffect } from "react";

export const useOutsideClick = (ref: any, funct: () => void) => {
  useEffect(() => {
    /**
     * Run if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        funct();
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, funct]);
};

export const useOutsideHover = (ref1: any, ref2: any, funct: () => void) => {
  useEffect(() => {
    /**
     * Run if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (
        ref1.current &&
        !ref1.current.contains(event.target) &&
        ref2.current &&
        !ref2.current.contains(event.target)
      ) {
        funct();
      }
    }

    // Bind the event listener
    document.addEventListener("mouseover", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mouseover", handleClickOutside);
    };
  }, [ref1, ref2, funct]);
};
