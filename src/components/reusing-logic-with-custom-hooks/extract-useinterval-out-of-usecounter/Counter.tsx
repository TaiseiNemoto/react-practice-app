'use client';

import { useCounter } from '@/app/reusing-logic-with-custom-hooks/extract-useinterval-out-of-usecounter/useCounter';
import { useInterval } from '@/app/reusing-logic-with-custom-hooks/extract-useinterval-out-of-usecounter/useInterval';

export default function Counter() {
  const count = useCounter(1000);

  useInterval(() => {
    const randomColor = `hsla(${Math.random() * 360}, 100%, 50%, 0.2)`;
    document.body.style.backgroundColor = randomColor;
  }, 2000);

  return <h1>Seconds passed: {count}</h1>;
}
