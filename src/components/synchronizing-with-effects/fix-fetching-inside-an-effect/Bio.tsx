'use client';

import fetchBio from '@/app/synchronizing-with-effects/fix-fetching-inside-an-effect/api';
import { useEffect, useState } from 'react';

export default function Bio() {
  const [person, setPerson] = useState('Alice');
  const [bio, setBio] = useState<null | string>(null);

  useEffect(() => {
    let ignore = false;
    setBio(null);
    fetchBio(person).then((result) => {
      if (!ignore) {
        setBio(result);
      }
    });
    return () => {
      ignore = true;
    };
  }, [person]);

  return (
    <>
      <select
        value={person}
        onChange={(e) => {
          setPerson(e.target.value);
        }}
      >
        <option value="Alice">Alice</option>
        <option value="Bob">Bob</option>
        <option value="Taylor">Taylor</option>
      </select>
      <hr />
      <p>
        <i>{bio ?? 'Loading...'}</i>
      </p>
    </>
  );
}
