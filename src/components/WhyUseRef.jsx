import { useEffect, useRef } from "react";

const WhyUseRef = () => {
  const pageRef = useRef();
  useEffect(() => {
    pageRef.current.style.background = "beige";
  }, []);

  const toggleColor = () => {
    const currentColor = pageRef.current.style.background;
    pageRef.current.style.background =
      currentColor === "beige" ? "lightBlue" : "beige";
  };
  return (
    <div ref={pageRef}>
      <button onClick={toggleColor}>Toggle Color</button>
    </div>
  );
};

export default WhyUseRef;
