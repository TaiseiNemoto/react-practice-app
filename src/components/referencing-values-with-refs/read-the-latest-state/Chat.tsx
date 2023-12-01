'use client';

import { useRef, useState } from 'react';

export default function Chat() {
  const [text, setText] = useState('');
  const textRef = useRef(text);

  function handleSend() {
    setTimeout(() => {
      alert('Sending: ' + textRef.current);
    }, 3000);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
    textRef.current = e.target.value;
  }

  return (
    <>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleSend}>Send</button>
    </>
  );
}
