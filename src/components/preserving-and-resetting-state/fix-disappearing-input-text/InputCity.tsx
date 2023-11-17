'use client';

import { useState } from 'react';
import Form from './Form';
import Button from '@/components/common/Button';

export default function InputCity() {
  const [showHint, setShowHint] = useState(false);

  return (
    <div>
      {showHint && (
        <p>
          <i>Hint: Your favorite city?</i>
        </p>
      )}
      <Form />
      <Button
        handleClick={() => {
          setShowHint(!showHint);
        }}
        buttonText={showHint ? 'Hide hint' : 'Show hint'}
      />
    </div>
  );
}
