import Button from '@/components/common/Button';
import { useState } from 'react';

type TodoType = {
  id: number;
  title: string;
  done: boolean;
};

type TaskListProps = {
  todos: TodoType[];
  onChangeTodo: (arg: TodoType) => void;
  onDeleteTodo: (arg: number) => void;
};

type TaskProps = {
  todo: TodoType;
  onChange: (arg: TodoType) => void;
  onDelete: (arg: number) => void;
};

export default function TaskList({
  todos,
  onChangeTodo,
  onDeleteTodo,
}: TaskListProps) {
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

function Task({ todo, onChange, onDelete }: TaskProps) {
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
