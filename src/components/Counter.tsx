import { useState } from "react";

interface Props {
  initialValue?: number
}

const Counter = (props: Props) => {
  const { initialValue = 0 } = props;
  const [counter, setCounter] = useState(initialValue);

  const handleClick = () => {
    setCounter(c => c + 1);
  };

  return (
    <>
      <h1>Counter: {counter}</h1>

      <button onClick={handleClick}>
        +1
      </button>
    </>
  );
};

export default Counter;