'use client';

import Button from '@/components/common/Button';
import { useState } from 'react';
import Counter from './Counter';

export default function CounterWrapper() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button
        buttonText={show ? 'Hide' : 'Show'}
        handleClick={() => setShow((s) => !s)}
      />
      <br />
      <hr />
      {show && <Counter />}
    </>
  );
}
