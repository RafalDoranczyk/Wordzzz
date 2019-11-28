import { useEffect } from "react";

const UseDetectOutsideClick = (ref, handler) => {
  useEffect(() => {
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  });

  const listener = e => {
    if (!ref.current || ref.current.contains(e.target)) {
      return;
    }
    handler(false);
  };
};

export default UseDetectOutsideClick;
