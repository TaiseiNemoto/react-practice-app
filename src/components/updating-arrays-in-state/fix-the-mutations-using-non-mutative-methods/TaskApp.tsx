'use client';

import { useState } from 'react';
import AddTodo from './AddTodo';
import TaskList from './TaskList';

const initialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];

type TodoType = {
  id: number;
  title: string;
  done: boolean;
};

export default function TaskApp() {
  const [todos, setTodos] = useState(initialTodos);

  function handleAddTodo(title: string) {
    if (!title) return;
    setTodos([
      ...todos,
      {
        id: todos.length,
        title: title,
        done: false,
      },
    ]);
  }
  function handleChangeTodo(nextTodo: TodoType) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === nextTodo.id) {
          return nextTodo;
        } else return todo;
      }),
    );
  }
  function handleDeleteTodo(todoId: number) {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  }

  return (
    <>
      <AddTodo onAddTodo={handleAddTodo} />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}
