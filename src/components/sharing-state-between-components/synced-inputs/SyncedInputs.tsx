'use client';

import { useState } from 'react';
import Input from './Input';

export default function SyncedInputs() {
  const [text, setText] = useState('');

  function handleChangeText(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  return (
    <>
      <Input label="First Input" text={text} onChange={handleChangeText} />
      <Input label="Second Input" text={text} onChange={handleChangeText} />
    </>
  );
}
