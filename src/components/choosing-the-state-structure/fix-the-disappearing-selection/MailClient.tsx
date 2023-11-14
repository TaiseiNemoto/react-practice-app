'use client';

import { initialLetters } from '@/app/choosing-the-state-structure/fix-the-disappearing-selection/data';
import { useState } from 'react';
import Letter from './Letter';

export type Letter = {
  id: number;
  subject: string;
  isStarred: boolean;
};

export default function MailClient() {
  const [letters, setLetters] = useState(initialLetters);
  const [highlightedLetterId, setHighlightedLetterId] = useState<number | null>(
    null,
  );

  function handleHover(letter: Letter) {
    setHighlightedLetterId(letter.id);
  }

  function handleStar(starred: Letter) {
    setLetters(
      letters.map((letter) => {
        if (letter.id === starred.id) {
          return {
            ...letter,
            isStarred: !letter.isStarred,
          };
        } else return letter;
      }),
    );
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map((letter) => (
          <Letter
            key={letter.id}
            letter={letter}
            isHighlighted={letter.id === highlightedLetterId}
            onHover={handleHover}
            onToggleStar={handleStar}
          />
        ))}
      </ul>
    </>
  );
}
