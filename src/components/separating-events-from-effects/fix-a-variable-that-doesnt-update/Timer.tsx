'use client';

import Button from '@/components/common/Button';
import { useEffect, useState } from 'react';

export default function Timer() {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => c + increment);
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, [increment]);

  return (
    <>
      <h1>
        Counter: {count}
        <Button buttonText="Reset" handleClick={() => setCount(0)} />
      </h1>
      <hr />
      <p>
        Every second, increment by:
        <button
          disabled={increment == 0}
          onClick={() => {
            setIncrement((i) => i - 1);
          }}
        >
          -
        </button>
        <b>{increment}</b>
        <button
          disabled={increment == 0}
          onClick={() => {
            setIncrement((i) => i + 1);
          }}
        >
          +
        </button>
      </p>
    </>
  );
}
