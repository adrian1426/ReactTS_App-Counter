import { useEffect, useState, useRef } from "react";
import { gsap } from 'gsap';

const MAXIMUM_COUNT = 10;

const CounterEffect = () => {
  const [counter, setCounter] = useState(5);
  const refCounter = useRef<HTMLHeadingElement>(null);

  const handleClick = () => {

    counter <= MAXIMUM_COUNT && setCounter(c => c + 1);
  };

  useEffect(() => {
    if (counter <= MAXIMUM_COUNT) return;

    const timeline = gsap.timeline();

    timeline.to(refCounter.current, { y: -10, ease: 'ease.out' })
      .to(refCounter.current, { y: 0, ease: 'bounce.out' });

  }, [counter]);

  return (
    <>
      <h1>Counter Effect</h1>
      <h2 ref={refCounter}>{counter}</h2>

      <button onClick={handleClick}>
        +1
      </button>
    </>
  );
};

export default CounterEffect;