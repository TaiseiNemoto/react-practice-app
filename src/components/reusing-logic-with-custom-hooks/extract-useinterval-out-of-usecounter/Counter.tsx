'use client';

import { useCounter } from '@/app/reusing-logic-with-custom-hooks/extract-useinterval-out-of-usecounter/useCounter';

export default function Counter() {
  const count = useCounter(1000);
  return <h1>Seconds passed: {count}</h1>;
}
