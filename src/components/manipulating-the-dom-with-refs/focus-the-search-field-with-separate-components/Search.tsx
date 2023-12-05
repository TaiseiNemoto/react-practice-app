'use client';

import { useRef } from 'react';
import SearchButton from './SearchButton';
import SearchInput from './SearchInput';

export default function Search() {
  const inputRef = useRef<HTMLInputElement>(null!);

  return (
    <>
      <nav>
        <SearchButton handleClick={() => inputRef.current.focus()} />
      </nav>
      <SearchInput ref={inputRef} />
    </>
  );
}
