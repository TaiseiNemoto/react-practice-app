'use client';

import { useState } from 'react';
import Button from '../common/Button';

export default function TrafficLight() {
  const [walk, setWalk] = useState(true);

  function handleChange() {
    setWalk(!walk);
    alert(walk ? 'Stop is next' : 'Walk is next');
  }

  return (
    <>
      <Button
        buttonText={`Change to ${walk ? 'stop' : 'walk'}`}
        handleClick={handleChange}
      />
      <h1 style={{ color: walk ? 'darkgreen' : 'darkred' }}>
        {walk ? 'Walk' : 'Stop'}
      </h1>
    </>
  );
}
