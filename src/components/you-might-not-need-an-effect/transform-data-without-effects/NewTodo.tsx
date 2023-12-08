import { createTodo } from '@/app/you-might-not-need-an-effect/transform-data-without-effects/todos';
import { useState } from 'react';
import { Todo } from './TodoList';

type CreateTodo = (arg: Todo) => void;

export default function NewTodo({ onAdd }: { onAdd: CreateTodo }) {
  const [text, setText] = useState('');

  function handleAddClick() {
    setText('');
    onAdd(createTodo(text));
  }

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddClick}>Add</button>
    </>
  );
}
