'use client';
import { useState } from 'react';

type AddItemProps = {
  onAddItem: (arg: string) => void;
};

export default function AddItem({ onAddItem }: AddItemProps) {
  const [title, setTitle] = useState('');
  return (
    <>
      <input
        placeholder="Add item"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={() => {
          setTitle('');
          onAddItem(title);
        }}
      >
        Add
      </button>
    </>
  );
}
