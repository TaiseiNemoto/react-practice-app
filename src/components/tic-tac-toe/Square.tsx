'use client';

import { useState } from 'react';

export default function Square() {
  const [value, setValue] = useState<string | null>(null);
  function handleClick() {
    setValue('X');
  }

  return (
    <button
      className="border-2 text-2xl w-9 h-9 mt-[-2px] mr-[-2px] font-bold"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}
