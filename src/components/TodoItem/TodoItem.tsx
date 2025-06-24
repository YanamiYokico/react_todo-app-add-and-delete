/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Todo } from '../../types/Todo';

interface TodoItemProps {
  todo: Todo;
  isProcessing: boolean;
  onDelete: (id: number) => void;
  disabled?: boolean;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  isProcessing,
  onDelete,
  disabled = false,
}) => (
  <div
    data-cy="Todo"
    className={`todo${todo.completed ? ' completed' : ''}`}
    key={todo.id}
  >
    <label className="todo__status-label">
      <input
        data-cy="TodoStatus"
        type="checkbox"
        className="todo__status"
        checked={todo.completed}
        readOnly
        disabled={disabled}
      />
    </label>

    <span data-cy="TodoTitle" className="todo__title">
      {todo.title}
    </span>

    <button
      type="button"
      className="todo__remove"
      data-cy="TodoDelete"
      onClick={() => onDelete(todo.id)}
      disabled={disabled}
    >
      ×
    </button>

    <div
      data-cy="TodoLoader"
      className={`modal overlay${isProcessing ? ' is-active' : ' hidden'}`}
    >
      <div className="modal-background has-background-white-ter" />
      <div className="loader" />
    </div>
  </div>
);
