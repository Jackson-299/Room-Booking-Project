import { useRef } from 'react';

const UseRefHookOne = () => {
  const ColorRef = useRef(true);

  const toggleColor = () => {
    if (ColorRef.current) {
      document.body.style.background = 'lightPink';
    } else {
      document.body.style.background = 'lightBlue';
    }
    ColorRef.current = !ColorRef.current;
    console.log(ColorRef.current);
  };

  return (
    <div>
      <p>useRef</p>
      <button onClick={toggleColor}>Toggle</button>
    </div>
  );
};

export default UseRefHookOne;
