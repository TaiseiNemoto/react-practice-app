'use client';

import { useState } from 'react';
import Button from '../common/Button';

export default function Scoreboard() {
  const [player, setPlayer] = useState({
    firstName: 'Ranjani',
    lastName: 'Shettar',
    score: 10,
  });

  function handlePlusClick() {
    setPlayer({
      ...player,
      score: player.score + 1,
    });
  }

  function handleFirstNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPlayer({
      ...player,
      firstName: e.target.value,
    });
  }

  function handleLastNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPlayer({
      ...player,
      lastName: e.target.value,
    });
  }

  return (
    <>
      <label>
        Score: <b>{player.score}</b>{' '}
        <Button handleClick={handlePlusClick} buttonText="+1" />
      </label>
      <label>
        First name:
        <input
          type="text"
          value={player.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:
        <input
          type="text"
          value={player.lastName}
          onChange={handleLastNameChange}
        />
      </label>
    </>
  );
}
