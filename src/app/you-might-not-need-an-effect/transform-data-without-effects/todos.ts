let nextId = 0;

import type { Todo } from '@/components/you-might-not-need-an-effect/transform-data-without-effects/TodoList';

export function createTodo(text: string, completed = false): Todo {
  return {
    id: nextId++,
    text,
    completed,
  };
}

export const initialTodos = [
  createTodo('Get apples', true),
  createTodo('Get oranges', true),
  createTodo('Get carrots'),
];
