import { useEffect, useState } from "react";
import { gsap } from 'gsap';

const MAXIMUM_COUNT = 10;

const CounterEffect = () => {
  const [counter, setCounter] = useState(5);

  const handleClick = () => {

    counter <= MAXIMUM_COUNT && setCounter(c => c + 1);
  };

  useEffect(() => {
    if (counter <= MAXIMUM_COUNT) return;

    console.log('%cse llegó al valor máximo', 'color:withe; background:blue');

    gsap.to('h2', { y: -10, ease: 'ease.out' })
      .then(() => {
        gsap.to('h2', { y: 0, ease: 'bounce.out' })
      })
  }, [counter]);

  return (
    <>
      <h1>Counter Effect</h1>
      <h2>{counter}</h2>

      <button onClick={handleClick}>
        +1
      </button>
    </>
  );
};

export default CounterEffect;