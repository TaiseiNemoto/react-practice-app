let nextId = 0;
let calls = 0;

import type { Todo } from '@/components/you-might-not-need-an-effect/cache-a-calculation-without-effects/TodoList';

type Todos = Todo[];

export function getVisibleTodos(todos: Todos, showActive: boolean) {
  console.log(`getVisibleTodos() was called ${++calls} times`);
  const activeTodos = todos.filter((todo) => !todo.completed);
  const visibleTodos = showActive ? activeTodos : todos;
  return visibleTodos;
}

export function createTodo(text: string, completed = false) {
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
