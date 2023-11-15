'use client';

import { letters } from '@/app/choosing-the-state-structure/implement-multiple-selection/data';
import { useState } from 'react';
import Letter from './Letter';

export default function MailClient() {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  function handleToggle(toggleId: number) {
    if (selectedIds.includes(toggleId)) {
      setSelectedIds(selectedIds.filter((id) => id !== toggleId));
    } else {
      setSelectedIds([...selectedIds, toggleId]);
    }
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map((letter) => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={selectedIds.includes(letter.id)}
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>You selected {selectedIds.length} letters</b>
        </p>
      </ul>
    </>
  );
}
