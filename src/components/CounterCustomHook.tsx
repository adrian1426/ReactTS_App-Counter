import { useCounter } from '../hooks/useCounter';

const MAXIMUM_COUNT = 10;

const CounterCustomHook = () => {
  const { counter, setCounter, refCounter } = useCounter({ maxCount: MAXIMUM_COUNT });

  const handleClick = () => {
    counter <= MAXIMUM_COUNT && setCounter(c => c + 1);
  };

  return (
    <>
      <h1>Counter Effec with custom hook</h1>
      <h2 ref={refCounter}>{counter}</h2>

      <button onClick={handleClick}>
        +1
      </button>
    </>
  );
};

export default CounterCustomHook;