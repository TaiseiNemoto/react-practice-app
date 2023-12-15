'use client';

import { useCounter } from '@/app/reusing-logic-with-custom-hooks/make-the-counter-delay-configurable/useCounter';
import { useState } from 'react';

export default function DelayCounter() {
  const [delay, setDelay] = useState(1000);
  const count = useCounter(delay);

  return (
    <>
      <label>
        Tick duration: {delay} ms
        <br />
        <input
          type="range"
          value={delay}
          min="10"
          max="2000"
          onChange={(e) => setDelay(Number(e.target.value))}
        />
      </label>
      <hr />
      <h1>Ticks: {count}</h1>
    </>
  );
}
