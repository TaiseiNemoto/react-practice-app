'use client';

import Button from '@/components/common/Button';
import { useState } from 'react';

export default function Form() {
  const [showForm, setShowForm] = useState(false);
  const [message, setMessage] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setShowForm(false);
    sendMessage(message);
  }

  if (!showForm) {
    return (
      <>
        <h1>Thanks for useing our services!</h1>
        <Button
          buttonText="Open chat"
          handleClick={() => {
            setMessage('');
            setShowForm(true);
          }}
        />
      </>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button type="submit" disabled={message === ''}>
        Send
      </button>
    </form>
  );
}

function sendMessage(message: string) {
  console.log('Sending message: ' + message);
}
