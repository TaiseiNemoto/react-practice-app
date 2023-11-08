'use client';

import Button from '@/components/common/Button';
import { useState } from 'react';

type AddTodoProp = {
  onAddTodo: (arg: string) => void;
};

export default function AddTodo({ onAddTodo }: AddTodoProp) {
  const [title, setTitle] = useState('');

  function handleAddTodo() {
    onAddTodo(title);
    setTitle('');
  }

  return (
    <>
      <input
        type="text"
        placeholder="Add todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button handleClick={handleAddTodo} buttonText="Add" />
    </>
  );
}
