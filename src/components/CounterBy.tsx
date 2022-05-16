import { useState } from "react";

interface Props {
  initialValue?: number
};

interface CounterState {
  counter: number,
  clicks: number
};

const CounterBy = (props: Props) => {
  const { initialValue = 10 } = props;
  const [counterState, setCounterState] = useState<CounterState>({
    counter: initialValue,
    clicks: 0
  });

  const handleClick = (value: number) => {
    setCounterState(({ clicks, counter }) => ({
      clicks: clicks + 1,
      counter: counter + value
    }));
  };

  return (
    <>
      <h1>CounterBy: {counterState.counter}</h1>
      <h1>Click: {counterState.clicks}</h1>

      <button onClick={() => handleClick(1)}>
        +1
      </button>

      <button onClick={() => handleClick(5)}>
        +5
      </button>
    </>
  );
};

export default CounterBy;