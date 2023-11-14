'use client';

import { letters } from '@/app/choosing-the-state-structure/implement-multiple-selection/data';
import { useState } from 'react';
import Letter from './Letter';

export default function MailClient() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedCount = 1;

  function handleToggle(toggleId: number) {
    setSelectedId(toggleId);
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map((letter) => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={letter.id === selectedId}
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>You selected {selectedCount} letters</b>
        </p>
      </ul>
    </>
  );
}
