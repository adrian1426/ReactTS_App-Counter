import { useEffect, useRef, useState } from "react";
import { gsap } from 'gsap';

interface params {
  maxCount: number
}

export const useCounter = ({ maxCount }: params) => {
  const [counter, setCounter] = useState(5);
  const refCounter = useRef<HTMLHeadingElement>(null);

  const timeLineRef = useRef(gsap.timeline());

  useEffect(() => {
    if (counter <= maxCount) return;

    timeLineRef.current.to(refCounter.current, { y: -10, ease: 'ease.out' })
      .to(refCounter.current, { y: 0, ease: 'bounce.out' });

  }, [counter, maxCount]);

  return {
    counter,
    setCounter,
    refCounter
  }
};