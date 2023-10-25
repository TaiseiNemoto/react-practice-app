'use client';

import Button from '../common/Button';

export default function FeedbackFormHello() {
  function handleSetName() {
    const name = prompt('What is your name?');
    alert(`Hello ${name}!`);
  }

  return <Button handleClick={handleSetName} buttonText="Greet" />;
}
