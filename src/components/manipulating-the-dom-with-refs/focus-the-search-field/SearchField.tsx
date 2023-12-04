'use client';

import Button from '@/components/common/Button';
import { useRef } from 'react';

export default function SearchField() {
  const inputRef = useRef<HTMLInputElement>(null!);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <nav>
        <Button handleClick={handleClick} buttonText="Search" />
        <input
          ref={inputRef}
          type="search"
          placeholder="Looking for something?"
        />
      </nav>
    </>
  );
}
