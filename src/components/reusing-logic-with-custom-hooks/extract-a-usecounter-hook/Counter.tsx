'use client';

import { useCounter } from '@/app/reusing-logic-with-custom-hooks/extract-a-usecounter-hook/useCounter';

export default function Counter() {
  const count = useCounter();
  return <h1>Seconds passed: {count}</h1>;
}
