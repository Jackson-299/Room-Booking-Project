import { useRef } from "react";
import "./WhyUseRefTwo.css";

const WhyUseRefTwo = () => {
  const imageRef = useRef();
  console.log(imageRef);
  const moveImage = () => {
    console.log(imageRef);
    if (imageRef.current) {
      imageRef.current.classList.toggle("move-right");
      console.log(imageRef);
    }
  };
  return (
    <div>
      <img
        ref={imageRef}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs3PodpHL4jAWjOOhczD92Cgb-7L0a78jT-g&s"
      />
      <br />
      <button onClick={moveImage}>click me</button>
    </div>
  );
};
export default WhyUseRefTwo;
