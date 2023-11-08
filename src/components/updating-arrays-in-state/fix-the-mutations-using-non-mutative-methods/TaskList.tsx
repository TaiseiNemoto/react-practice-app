import Button from '@/components/common/Button';
import { useState } from 'react';

export default function TaskList({ todos, onChangeTodo, onDeleteTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Task todo={todo} onChange={onChangeTodo} onDelete={onDeleteTodo} />
        </li>
      ))}
    </ul>
  );
}

function Task({ todo, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let todoContent;

  function handleSave() {
    setIsEditing(false);
  }

  function handleEdit() {
    setIsEditing(true);
  }

  function handleDelete() {
    onDelete(todo.id);
  }

  if (isEditing) {
    todoContent = (
      <>
        <input
          type="text"
          value={todo.title}
          onChange={(e) => {
            onChange({
              ...todo,
              title: e.target.value,
            });
          }}
        />
        <Button handleClick={handleSave} buttonText="Save" />
      </>
    );
  } else {
    todoContent = (
      <>
        {todo.title}
        <Button handleClick={handleEdit} buttonText="Edit" />
      </>
    );
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={(e) => {
          onChange({
            ...todo,
            done: e.target.checked,
          });
        }}
      />
      {todoContent}
      <Button handleClick={handleDelete} buttonText="Delete" />
    </label>
  );
}
